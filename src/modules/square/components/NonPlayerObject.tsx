import React, { useEffect, useRef } from "react";
import { Mesh } from "three";
import { useGLTF } from "@react-three/drei";
import { INonPlayerObject } from "../data/NonPlayerObjectData";
import { socket } from "./SocketManager";

const NonPlayerObject = (props: INonPlayerObject) => {
  const meshRef = useRef<Mesh>(null!);
  const gltf = useGLTF(props.characterURI);
  const model = gltf.scene.clone();

  useEffect(() => {
    console.log(props.uuid);
    socket.emit("nonPlayerObjects", props);
  }, [props.uuid]);

  return (
    <mesh
      {...props}
      ref={meshRef}
      key={props.uuid}
      position={props.position}
      rotation={props.rotation}
    >
      <primitive object={model} />
    </mesh>
  );
};

export default NonPlayerObject;
