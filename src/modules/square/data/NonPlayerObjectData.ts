interface INonPlayerObjectProps {
  uuid: string;
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

export type INonPlayerObject = INonPlayerObjectProps &
  JSX.IntrinsicElements["mesh"];
