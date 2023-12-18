import React from "react";
import test_image from "../../../assets/images/test_images/Mesh.png";

function Title(type: { val: string }) {
  return (
    <div
      style={{
        width: "90%",
        color: "white",
        fontSize: 36,
        margin: "5%",
        marginTop: "-8%",
      }}
    >
      {type.val}
    </div>
  );
}

function Description(type: { val: string }) {
  return (
    <div
      style={{
        width: "90%",
        color: "gray",
        fontSize: 14,
        margin: "5%",
      }}
    >
      {type.val}
    </div>
  );
}

export { Title, Description };
