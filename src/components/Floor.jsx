import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { BufferGeometry, MeshLambertMaterial, Vector3 } from "three";
import useKeyboard from "../hooks/useKeyboard";
const SPEED = 800;
const Floor = (props) => {
  const { camera, controls } = useThree();
  const { forward, backward, right, left, run } = useKeyboard();
  const velocity = useMemo(() => new Vector3(), []);
  const direction = useMemo(() => new Vector3(), []);

  useFrame(({ camera }, delta) => {
    updatePlayer(delta);
  });

  const updatePlayer = (delta) => {
    velocity.y -= 9.8 * 100.0 * delta;
    velocity.x -= velocity.x * 10.0 * delta;
    velocity.z -= velocity.z * 10.0 * delta;

    direction.z = Number(forward) - Number(backward);
    direction.x = Number(right) - Number(left);
    direction.normalize();

    let speed = SPEED;
    if (run && (forward || backward || left || right))
      speed = speed + speed * 1.5;

    if (forward || backward) velocity.z -= direction.z * speed * delta;
    if (left || right) velocity.x -= direction.x * speed * delta;

    camera.translateX(-velocity.x * delta);
    camera.translateZ(velocity.z * delta);
    // camera.position.y += velocity.y * delta;
  };

  return (
    <mesh
      {...props}
      scale={1}
      position={new Vector3(1, 2, 3)}
      material={new MeshLambertMaterial()}
      // geometry={new BufferGeometry(2000, 2000, 2, 2)}
    >
      <meshBasicMaterial color="orange" />
      <planeBufferGeometry args={[10, 10, 1, 1]} />
    </mesh>
  );
};
export default Floor;

{
  /* <mesh
visible
userData={{ hello: "world" }}
rotation={-Math.PI / 2}
position={new Vector3(1, 2, 3)}
material={new MeshLambertMaterial()}
geometry={new BufferGeometry(2000, 2000, 2, 2)}
></mesh> */
}
