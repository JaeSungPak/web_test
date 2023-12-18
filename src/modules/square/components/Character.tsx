import React, { useRef } from "react";
import { Mesh } from "three";
import { useGLTF } from "@react-three/drei";
import { ICharacter } from "../data/CharacterData";
import { useFBX } from "@react-three/drei";

const Character = (props: ICharacter) => {
  const meshRef = useRef<Mesh>(null!);
  const gltf = useGLTF(props.characterURI);
  const model = gltf.scene.clone();

  // const fbx = useFBX(props.characterURI);
  // const model = fbx.clone();

  return (
    <mesh
      {...props}
      ref={meshRef}
      key={props.id}
      position={props.position}
      rotation={props.rotation}
    >
      <primitive object={model} />
    </mesh>
  );
};

export default Character;
