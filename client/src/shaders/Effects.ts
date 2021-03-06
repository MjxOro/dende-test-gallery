import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
const FadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: new THREE.Texture(),
    tex2: new THREE.Texture(),
    disp: new THREE.Texture(),
  },
  `
      varying vec2 vUv;
      void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }`,
  ` 
      varying vec2 vUv;
      uniform sampler2D tex;
      uniform sampler2D tex2;
      uniform sampler2D tex3;
      uniform sampler2D disp;
      uniform float _rot;
      uniform float dispFactor;
      uniform float effectFactor;
      void main() {
        vec2 uv = vUv;
        vec4 disp = texture2D(disp, uv);
        vec2 distortedPosition = vec2(uv.x, uv.y + dispFactor * (disp.r*effectFactor));
        vec2 distortedPosition2 = vec2(uv.x, uv.y - (1.0 - dispFactor) * (disp.r*effectFactor));
        vec4 _texture = texture2D(tex, distortedPosition);
        vec4 _texture2 = texture2D(tex2, distortedPosition2);
        vec4 finalTexture = mix(_texture, _texture2 , dispFactor);
        gl_FragColor = finalTexture;
      }`
);

// register element in r3f (<fade />)
extend({ FadeMaterial });
