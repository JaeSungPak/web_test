interface ICharacterProps {
  socketID: string;
  characterURI: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  rotation: {
    x: number;
    y: number;
    z: number;
  };
}

export type ICharacter = ICharacterProps & JSX.IntrinsicElements["mesh"];
