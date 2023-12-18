import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  ContactShadows,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import useCharacterStore from "../stores/characterStore";
import Character from "./Character";
import { Euler, Vector3 } from "three";
import NonPlayerObject from "./NonPlayerObject";

const SquareBrowserView = () => {
  const cameraControlRef = useRef<CameraControls | null>(null);
  const characters = useCharacterStore((state) => state.characters);
  const nonPlayerObjects = useCharacterStore((state) => state.nonPlayerObjects);

  useEffect(() => {
    console.log(characters);
    console.log(nonPlayerObjects);
  }, [characters, nonPlayerObjects]);

  return (
    <Canvas>
      <CameraControls ref={cameraControlRef} />
      <color attach="background" args={["#cccccc"]} />
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <ContactShadows blur={2} />
      <OrbitControls />
      {/* {characters.map((character, idx) => (
        <Character
          key={character.id}
          socketID={character.socketID}
          characterURI={character.characterURI}
          position={
            new Vector3(
              character.position.x,
              character.position.y,
              character.position.z
            )
          }
          rotation={
            new Euler(
              character.rotation.x,
              character.rotation.y,
              character.rotation.z
            )
          }
        />
      ))} */}
      {nonPlayerObjects.map((nonPlayerObject, idx) => (
        <NonPlayerObject
          key={nonPlayerObject.uuid}
          uuid={nonPlayerObject.uuid}
          characterURI={nonPlayerObject.characterURI}
          position={
            new Vector3(
              nonPlayerObject.position.x,
              nonPlayerObject.position.y,
              nonPlayerObject.position.z
            )
          }
          rotation={
            new Euler(
              nonPlayerObject.rotation.x,
              nonPlayerObject.rotation.y,
              nonPlayerObject.rotation.z
            )
          }
        />
      ))}
    </Canvas>
  );
};

export default SquareBrowserView;
