import { create } from "zustand";
import { ICharacter } from "../data/CharacterData";
import { INonPlayerObject } from "../data/NonPlayerObjectData";
import { v4 as uuidv4 } from "uuid";
import { Euler, Vector3 } from "three";

export interface CharacterStore {
  characters: ICharacter[];
  setCharacters: (characters: ICharacter[]) => void;
  nonPlayerObjects: INonPlayerObject[];
}

const useCharacterStore = create<CharacterStore>((set, get) => ({
  characters: [],
  setCharacters: (characters: ICharacter[]) => set({ characters }),
  nonPlayerObjects: [
    {
      uuid: uuidv4(),
      characterURI: "assets/models/Duck2.glb",
      position: new Vector3(0, 0, 0),
      rotation: new Euler(0, 0, 0),
    },
    //TODO: Add more non player objects here
  ],
}));

export default useCharacterStore;
