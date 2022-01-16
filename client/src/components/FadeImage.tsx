import "../shaders/Effects";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import img1 from "../assets/pic1.png";
import img2 from "../assets/6.jpeg";
import disp from "../assets/textureImg.jpeg";

const FadeImage = ({ args, ...props }: any) => {
  const mesh = useRef<any>();
  const material = useRef<any>();
  const [texture1, texture2, dispTexture] = useLoader(THREE.TextureLoader, [
    img1,
    img2,
    disp,
  ]);
  const scrollHook = useScroll();
  useFrame((state, delta) => {
    const range = scrollHook.offset;
    material.current.dispFactor = THREE.MathUtils.lerp(
      material.current.dispFactor,
      range,
      0.1
    );
  });

  return (
    <mesh ref={mesh} {...props}>
      <planeBufferGeometry args={args} />
      <fadeMaterial
        ref={material}
        tex={texture1}
        tex2={texture2}
        disp={dispTexture}
      />
    </mesh>
  );
};
export default FadeImage;
