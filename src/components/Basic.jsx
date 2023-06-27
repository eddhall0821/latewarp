import { Canvas } from "@react-three/fiber";
import Floor from "./Floor";
import { Stats, PointerLockControls } from "@react-three/drei";
import { useEffect, useState } from "react";

const Basic = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ fov: 110 }}>
        <Floor />
        <mesh>
          <boxGeometry args={[100, 50, 100, 10, 10, 10]} />
          <meshBasicMaterial wireframe color={"lime"} />
        </mesh>
        <PointerLockControls pointerSpeed={1} />
        <Stats />
      </Canvas>
    </div>
  );
};

export default Basic;
