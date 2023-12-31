import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { str2Hex } from "./utils";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/land.gltf");
  const handleTv = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const num = str2Hex(randomColor);
    materials.tvscreen.color.setHex(num);
  };
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mainplane.geometry}
        material={materials.whitecol}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sofabottom.geometry}
        material={materials.sofa}
        position={[1.33, 0.7, 4.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ceiling.geometry}
        material={materials.ceilingcolor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.backside.geometry}
        material={materials.backsidecol}
      />
      <group position={[0, 2.33, -5.66]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.tvskin}
        ></mesh>
        <mesh
          onClick={handleTv}
          castShadow
          receiveShadow
          geometry={nodes.Plane005_1.geometry}
          material={materials.tvscreen}
        >
          {/* <Html transform position={[0, 0, 0.071]}>
            <div
              style={{
                transform:
                  "scaleY(0.126) scaleX(0.1732) translate(-640px, -360px)",
                width: "0px",
                height: "0px",
                userSelect: "none"
              }}
            >
              <iframe
                title="YouTube"
                width="1280px"
                height="720px"
                style={{
                  userSelect: "none"
                }}
                src="https://www.youtube.com/embed/2tBFBHhnFHM"
              />
            </div>
          </Html> */}
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/land.gltf");
