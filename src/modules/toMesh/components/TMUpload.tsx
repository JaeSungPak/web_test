import { useState } from "react";
import React from "react";
import "../styles/tmUpload.css";
import { Title, Description } from "modules/toMesh/components/TMComponents";
import Viewer from "modules/toMesh/components/TMViewer";

function Desktop_Booth() {
  let content = null;
  const [selectedID, setSelectedId] = useState<number>(-1);
  const [page, setPage] = useState("SELECTION");
  const [myImage, setMyImage] = useState<string[]>([]);

  const addImage = (e: React.ChangeEvent<any>) => {
    const nowSelectImageList = e.target.files;
    const nowImageURLList: string[] = [];

    for (let i = 0; i < nowSelectImageList.length; i += 1) {
      const nowImageUrl = URL.createObjectURL(nowSelectImageList[i]);
      nowImageURLList.push(nowImageUrl);
    }

    setMyImage(nowImageURLList);
    setPage("SELECTED");
  };

  const handleDeleteImage = (id: number) => {
    setMyImage(myImage.filter((_, index) => index !== id));
    setPage("SELECTION");
  };

  const selection = (
    <>
      <div
        style={{
          width: "100%",
          color: "white",
        }}
      >
        <Title val="Upload just a single picture" />
        <Description
          val="Your photo will be discarded after 3D model generation safely. We do
          not collect your information identifiable."
        />
      </div>
      <div
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <label
          htmlFor="input-file"
          onChange={addImage}
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "355px",
              display: "flex",
              justifyContent: "center",
              height: "584px",
              backgroundColor: "white",
              borderRadius: 48,
              fontSize: 100,
              opacity: "50%",
            }}
          >
            <div
              style={{
                top: 400,
                color: "black",
                position: "absolute",
              }}
            >
              ⬆
            </div>
          </div>

          <input
            type="file"
            multiple={false}
            id="input-file"
            style={{ display: "none" }}
            accept="image/*"
          />
        </label>
      </div>
    </>
  );

  const selected = (
    <div className="preview" style={{}}>
      <div
        style={{
          width: "100%",
          color: "white",
        }}
      >
        <Title val="Awesome photo!" />
        <Description
          val="Your photo will be discarded after 3D model generation safely. We do
          not collect your information identifiable."
        />
      </div>
      <div
        onClick={() => {
          if (selectedID !== -1) {
            setSelectedId(-1);
          }
        }}
      >
        {myImage.map((image, id) => (
          <>
            <img
              src={image}
              alt={`${image}-${id}`}
              style={{
                margin: "2%",
                width: myImage.length <= 1 ? "95%" : "27%",
                border: "2px solid skyblue",
                borderRadius: 15,
              }}
              onClick={(event) => {
                if (selectedID !== id) {
                  event.stopPropagation();
                  setSelectedId(id);
                }
              }}
            />
            <input
              type="button"
              value="X"
              style={{
                width: 30,
                height: 30,
                position: "absolute",
                marginTop: "2%",
                marginLeft: "-10%",
                display: id === selectedID ? "" : "none",
                borderRadius: 40,
                background: "#98FA4B",
              }}
              onClick={() => {
                handleDeleteImage(id);
              }}
            />
          </>
        ))}
        <div>
          <input
            type="button"
            value="Generate!"
            style={{
              width: "80%",
              height: 70,
              position: "fixed",
              bottom: 0,
              margin: "10%",
              borderRadius: 30,
              backgroundColor: "yellowgreen",
              fontSize: 24,
              color: "black",
            }}
            onClick={() => {
              setPage("GENERATE");
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {page === "SELECTION" ? selection : <></>}
      {page === "SELECTED" ? selected : <></>}
      {page === "GENERATE" ? <Viewer /> : <></>}
    </>
  );
}

export default Desktop_Booth;
