import React from "react";
import { Joystick } from "react-joystick-component";
import { socket } from "./SocketManager";
import { IJoystickUpdateEvent } from "../data/JoystickData";

const SquareMobileView = () => {
  const handleMove = (e: IJoystickUpdateEvent) => {
    socket.emit("move", e.direction);
  };
  const handleStop = () => {};

  return (
    <div className="Joystick">
      <Joystick
        size={100}
        baseColor="gray"
        stickColor="black"
        move={handleMove}
        stop={handleStop}
      />
    </div>
  );
};

export default SquareMobileView;
