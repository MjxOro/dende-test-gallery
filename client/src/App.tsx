import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Scroll, ScrollControls, useIntersect, Image } from "@react-three/drei";
import "./App.scss";
import Img1 from "./assets/1.jpeg";
import Img2 from "./assets/2.jpeg";
import Img3 from "./assets/3.jpeg";
import Img4 from "./assets/4.jpeg";
import Img5 from "./assets/5.jpeg";
import Img6 from "./assets/6.jpeg";

const Foto: React.FC<any> = ({ scale, url, ...props }) => {
  const { width, height } = useThree((state) => state.viewport);
  const visible = useRef(false);
  const ref = useIntersect<any>((isVisible) => (visible.current = isVisible));
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible.current ? 0 : -height / 2 + 1,
      4,
      delta
    );
    ref.current.material.zoom = THREE.MathUtils.damp(
      ref.current.material.zoom,
      visible.current ? 1 : 1.5,
      4,
      delta
    );
  });
  return (
    <group {...props}>
      <Image ref={ref} scale={scale} url={url} />
    </group>
  );
};
const Item: React.FC = () => {
  const [viewportW, setViewportW] = useState(window.visualViewport.width);
  console.log(viewportW);
  useFrame(() => {
    setViewportW(window.visualViewport.width);
  });
  const { width, height } = useThree((state) => state.viewport);
  return (
    <>
      <Scroll>
        <Foto
          scale={
            viewportW < 768
              ? [width / 1.2, width / 2, 1]
              : viewportW < 1280
              ? [width / 2, width / 3, 1]
              : [width / 3, width / 5, 1]
          }
          url={Img1}
          position={
            viewportW < 768
              ? [width / 25, 0, 0]
              : viewportW < 1280
              ? [width / 6, 0, 0]
              : [width / 4, 0, 0]
          }
        />
        {/*
         * Tripple stair like
         */}
        <Foto
          scale={
            viewportW < 768
              ? [width / 1.7, width / 2.4, 1]
              : viewportW < 1280
              ? [width / 2.8, width / 4, 1]
              : [width / 4, width / 6, 1]
          }
          url={Img2}
          position={
            viewportW < 768
              ? [-width / 6, -height * 0.65, 0]
              : viewportW < 1280
              ? [-width / 3.8, -height * 0.9, 0]
              : [-width / 5, -height * 0.9, 0]
          }
        />
        <Foto
          scale={
            viewportW < 768
              ? [width / 3.3, width / 1.2, 1]
              : viewportW < 1280
              ? [width / 6, width / 2, 1]
              : [width / 10, width / 3, 1]
          }
          url={Img3}
          position={
            viewportW < 768
              ? [width / 3.25, -height * 0.95, 0]
              : viewportW < 1280
              ? [width / 20, -height * 0.9, 0]
              : [width / 15, -height * 0.9, 0]
          }
        />
        <Foto
          scale={
            viewportW < 768
              ? [width / 1.7, width / 2, 1]
              : viewportW < 1280
              ? [width / 3.3, width / 4, 1]
              : [width / 5, width / 6, 1]
          }
          url={Img4}
          position={
            viewportW < 768
              ? [-width / 6, -height * 1.27, 0]
              : viewportW < 1280
              ? [width / 3.2, -height * 1, 0]
              : [width / 3, -height * 1.2, 0]
          }
        />
        {/*
        Left vertical rect
      */}
        <Foto
          scale={
            viewportW < 768
              ? [width / 2.2, width / 0.85, 1]
              : viewportW < 1280
              ? [width / 2.6, width / 1.7, 1]
              : [width / 5, width / 3, 1]
          }
          url={Img5}
          position={
            viewportW < 768
              ? [-width / 6, -height * 2.1, 0]
              : viewportW < 1280
              ? [-width / 4, -height * 2, 0]
              : [-width / 6, -height * 2, 0]
          }
        />
        {/*
        Center-left horizontal Rect
      */}
        <Foto
          scale={
            viewportW < 768
              ? [width / 1.3, width / 2, 1]
              : viewportW < 1280
              ? [width / 1.75, width / 2.5, 1]
              : [width / 3, width / 4, 1]
          }
          url={Img6}
          position={
            viewportW < 768
              ? [width / 15, -height * 3, 0]
              : [width / 5, -height * 3, 0]
          }
        />
      </Scroll>
      <Scroll html>
        <h1
          style={{
            position: "absolute",
            top: viewportW < 768 ? "15vh" : viewportW < 1280 ? "30vh" : "0vh",
            left: viewportW < 768 ? "20vw" : viewportW < 1280 ? "5vh" : "20vh",
            fontSize: "20vw",
          }}
        >
          Art
        </h1>
        <h1
          style={{
            position: "absolute",
            top:
              viewportW < 768 ? "130vh" : viewportW < 1280 ? "143vh" : "135vh",
            left: "20vw",
            fontSize: "15vw",
          }}
        >
          is
        </h1>
        <h1
          style={{
            position: "absolute",
            top:
              viewportW < 768 ? "145vh" : viewportW < 1280 ? "125vh" : "100vh",
            left: viewportW < 768 ? "20vw" : "65vw",
            fontSize: "10vw",
          }}
        >
          worth
        </h1>
        <h1
          style={{
            position: "absolute",
            top: viewportW < 1280 ? "230vh" : "220vh",
            left: viewportW < 768 ? "65vw" : "50vw",
            fontSize: "20vw",
          }}
        >
          the
        </h1>
        <h1
          style={{
            position: "absolute",
            top:
              viewportW < 768 ? "315vh" : viewportW < 1280 ? "335vh" : "300vh",
            left: viewportW < 768 ? "15vw" : viewportW < 1280 ? "5vh" : "15vh",
            fontSize: "15vw",
          }}
        >
          pain
        </h1>
      </Scroll>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 80 }}
      //Settings below, improve performance. Mostly for html images with some 3d spice!
      gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
      dpr={[1, 1.5]}
    >
      <color attach="background" args={["#ffffff"]} />
      <ScrollControls pages={4} damping={8}>
        <Item />
      </ScrollControls>
    </Canvas>
  );
};

export default App;
