import { Euler, Vector3 } from "three";
import { Server } from "socket.io";
import { v4 as uuidv4 } from "uuid";

const io = new Server({
  cors: {
    origin: "*",
  },
});

io.listen(3001);

const characters = [];
const nonPlayerObjects = [];

const generateRandomPosition = () => {
  const position = new Vector3(Math.random() * 3, 0, Math.random() * 3);
  return { x: position.x, y: position.y, z: position.z };
};

const generateInitialRotation = () => {
  const rotation = new Euler(0, 0, Math.PI / 180);
  return { x: rotation.x, y: rotation.y, z: rotation.z };
};

io.on("connect", (socket) => {
  console.log("user connected");

  characters.push({
    socketID: socket.id,
    characterURI: "assets/models/Duck2.glb",
    position: generateRandomPosition(),
    rotation: generateInitialRotation(),
  });

  socket.on("nonPlayerObjects", (data) => {
    console.log("nonPlayerObjects", data);
    nonPlayerObjects.push({
      uuid: uuidv4(),
      characterURI: "assets/models/Duck2.glb",
      position: generateRandomPosition(),
      rotation: generateInitialRotation(),
    });
  });

  io.emit("characters", characters);
  io.emit("nonPlayerObjects", nonPlayerObjects);

  socket.on("move", (direction) => {
    const character = characters.find(
      (character) => character.socketID === socket.id
    );
    if (character) {
      switch (direction) {
        case "FORWARD":
          character.position.z += 0.1;
          character.rotation.y = -90 * (Math.PI / 180);
          break;
        case "BACKWARD":
          character.position.z -= 0.1;
          character.rotation.y = 90 * (Math.PI / 180);
          break;
        case "LEFT":
          character.position.x -= 0.1;
          character.rotation.y = 180 * (Math.PI / 180);
          break;
        case "RIGHT":
          character.position.x += 0.1;
          character.rotation.y = 0;
          break;
        default:
          break;
      }
      io.emit("characters", characters);
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");

    characters.splice(
      characters.findIndex((character) => character.socketID === socket.id),
      1
    );
    io.emit("characters", characters);
    io.emit("nonPlayerObjects", nonPlayerObjects);
  });
});
