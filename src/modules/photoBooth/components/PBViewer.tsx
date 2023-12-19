import { useState, useRef } from "react";
import { Description, Title } from "modules/photoBooth/components/PBComponents";

import test_image from "../../../assets/images/test_images/Mesh.png";
import test_loading from "../../../assets/images/test_images/Loading.mp4";
import test_qr from "../../../assets/images/test_images/QR.jpeg";
import selection_0 from "../../../assets/images/test_images/selection_0.png";
import selection_1 from "../../../assets/images/test_images/selection_1.png";
import selection_2 from "../../../assets/images/test_images/selection_2.png";
import selection_3 from "../../../assets/images/test_images/selection_3.png";
import background from "../../../assets/images/test_images/desert.png";

function requestPermission() {
  console.log("권한 요청 중...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("알림 권한이 허용됨");
    } else {
      console.log("알림 권한 허용 안됨");
    }
  });
}

function Viewer() {
  const [page, setPage] = useState("WAITING");
  const readWait = useRef("DEFAULT");
  const selectedImage = useRef(test_image);

  function MeshViewer() {
    readWait.current = "DEFAULT";

    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={selectedImage.current}
            style={{
              width: selectedImage.current === test_image ? "100%" : "70%",
              marginTop: "0%",
            }}
          />
        </div>
        <div style={{ bottom: "20%" }}>
          <Title val="This is awesome!" />
          <Description val="Your original photo was discarded. 3D model will be discarded when this window closes." />
        </div>
        <input
          type="button"
          value="Try another"
          style={{
            width: "80%",
            height: 70,
            position: "fixed",
            bottom: 55,
            margin: "10%",
            borderRadius: 30,
            backgroundColor: "yellowgreen",
            fontSize: 24,
            color: "black",
          }}
          onClick={() => {
            readWait.current = "DEFAULT";
            setPage("SELECT");
          }}
        />

        <input
          type="button"
          value="Go to Square"
          style={{
            width: "80%",
            height: 70,
            position: "fixed",
            bottom: -20,
            margin: "10%",
            borderRadius: 30,
            backgroundColor: "yellowgreen",
            fontSize: 24,
            color: "black",
          }}
          onClick={() => {
            setPage("ANIM");
          }}
        />
      </>
    );
  }

  function Waiting() {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-45%",
          }}
        >
          <video
            muted
            autoPlay
            style={{ width: "100%", zIndex: "-1" }}
            onEnded={() => {
              setPage("DONE");
            }}
          >
            <source src={test_loading} type="video/mp4" />
          </video>
        </div>
        <input
          type="button"
          value={
            readWait.current === "DEFAULT"
              ? "wait somewhere else?"
              : "완성되면 알려줄까?"
          }
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
            if (readWait.current === "DEFAULT") {
              readWait.current = "READ";
              setPage("QR");
            } else {
              requestPermission();
              alert("생성이 완료되면 푸시 알림 (미구현)");
            }
          }}
        />
      </>
    );
  }

  function QRRequest() {
    return (
      <>
        <div
          style={{ display: "flex", justifyContent: "center", color: "white" }}
        >
          <img
            src={test_qr}
            style={{ zIndex: "-1", width: 144, marginTop: "10%" }}
          />
        </div>

        <div
          style={{
            color: "white",
            margin: "10%",
            fontSize: 24,
          }}
        >
          The photo was successfully sent to the server. Access the waiting page
          via the QR code and get an notification when it's ready!
        </div>
        <input
          type="button"
          value="Hmm.. I'll wait here"
          style={{
            width: "80%",
            height: 70,
            position: "fixed",
            bottom: 55,
            margin: "10%",
            borderRadius: 30,
            backgroundColor: "yellowgreen",
            fontSize: 24,
            color: "black",
          }}
          onClick={() => {
            setPage("WAITING");
          }}
        />

        <input
          type="button"
          value="Okay, bye!"
          style={{
            width: "80%",
            height: 70,
            position: "fixed",
            bottom: -20,
            margin: "10%",
            borderRadius: 30,
            backgroundColor: "yellowgreen",
            fontSize: 24,
            color: "black",
          }}
          onClick={() => {
            window.open("/", "_self");
            window.close();
          }}
        />
      </>
    );
  }

  function Select() {
    // Test
    const testImages = [selection_0, selection_1, selection_2, selection_3];
    return (
      <>
        {testImages.map((image, id) => (
          <>
            <img
              src={image}
              alt={`${image}-${id}`}
              style={{
                margin: "4%",
                width: "40%",
                border: "2px solid skyblue",
                borderRadius: 15,
              }}
              onClick={(event) => {
                selectedImage.current = image;
                setPage("WAITING");
              }}
            />
          </>
        ))}
      </>
    );
  }

  function AnimViewer() {
    return (
      <>
        <img
          src={background}
          style={{ width: "100%", zIndex: "-2", position: "absolute" }}
        />
        <img
          src={selectedImage.current}
          style={{
            width: "100%",
            zIndex: "-1",
            position: "absolute",
            marginTop: "30%",
          }}
        />
        <input
          type="button"
          value={"Jump"}
          style={{
            width: "45%",
            height: 70,
            position: "fixed",
            bottom: 0,
            margin: "3%",
            borderRadius: 30,
            backgroundColor: "yellowgreen",
            fontSize: 24,
            color: "black",
          }}
          onClick={() => {
            alert("Jump Animation!");
          }}
        />
        <input
          type="button"
          value={"Hello"}
          style={{
            width: "45%",
            height: 70,
            position: "fixed",
            bottom: 75,
            margin: "3%",
            borderRadius: 30,
            backgroundColor: "yellowgreen",
            fontSize: 24,
            color: "black",
          }}
          onClick={() => {
            alert("Hello Animation!");
          }}
        />
        <input
          type="button"
          value={"???"}
          style={{
            width: "45%",
            height: 140,
            position: "fixed",
            bottom: 0,
            margin: "3%",
            marginRight: 0,
            right: "3%",
            borderRadius: 30,
            backgroundColor: "yellowgreen",
            fontSize: 24,
            color: "black",
          }}
          onClick={() => {
            alert("Some Animation!");
          }}
        />
        <input
          type="button"
          value={"Home"}
          style={{
            width: "30%",
            height: 70,
            position: "fixed",
            top: 80,
            margin: "3%",
            marginRight: 0,
            borderRadius: 30,
            backgroundColor: "yellowgreen",
            fontSize: 24,
            color: "black",
          }}
          onClick={() => {
            setPage("DONE");
          }}
        />
      </>
    );
  }

  return (
    <div>
      {page === "WAITING" ? <Waiting /> : <></>}
      {page === "DONE" ? <MeshViewer /> : <></>}
      {page === "QR" ? <QRRequest /> : <></>}
      {page === "SELECT" ? <Select /> : <></>}
      {page === "ANIM" ? <AnimViewer /> : <></>}
    </div>
  );
}

export default Viewer;
