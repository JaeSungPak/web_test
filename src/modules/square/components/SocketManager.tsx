import { useEffect } from "react";
import { io } from "socket.io-client";
import useCharacterStore from "../stores/characterStore";
import { ICharacter } from "../data/CharacterData";

export const socket = io(`${process.env.REACT_APP_SOCKET_SERVER_URL}`);

export const SocketManager = () => {
  const setCharacters = useCharacterStore((state) => state.setCharacters);

  useEffect(() => {
    const onConnect = () => {
      console.log("connected");
    };
    const onDisconnect = () => {
      console.log("disconnected");
    };
    const onCharacters = (characters: ICharacter[]) => {
      setCharacters(characters);
      console.log(characters);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("characters", onCharacters);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("characters", onCharacters);
    };
  }, []);

  return <></>;
};
