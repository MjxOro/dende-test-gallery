import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Scroll, ScrollControls, Torus } from "@react-three/drei";
import "./App.scss";

const App: React.FC = () => {
  return <Canvas style={{ position: "fixed", display: "none" }}></Canvas>;
};

export default App;
