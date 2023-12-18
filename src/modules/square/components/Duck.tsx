import React, { useRef, useState } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { socket } from "./SocketManager";

const Duck = (props: JSX.IntrinsicElements["mesh"]) => {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const model = useGLTF(`assets/models/Duck${props.name}.glb`);
  let t = 0;

  useFrame((state, delta) => {
    t += delta;
    meshRef.current.position.y = Math.sin(t);
  });

  // console.log(model.scene.children[0]);
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(e) => socket.emit("move", [e.point.x, 0, e.point.z])}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <mesh ref={meshRef} position={props.position}>
        <primitive object={model.scene}></primitive>
      </mesh>
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Duck;
