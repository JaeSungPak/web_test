import { useState, useRef } from "react";
import { Description, Title } from "modules/photoBooth/components/PBComponents";

import test_image from "../../../assets/images/test_images/Mesh.png";
import test_loading from "../../../assets/images/test_images/Loading.gif";
import test_qr from "../../../assets/images/test_images/QR.jpeg";
import selection_0 from "../../../assets/images/test_images/selection_0.png";
import selection_1 from "../../../assets/images/test_images/selection_1.png";
import selection_2 from "../../../assets/images/test_images/selection_2.png";
import selection_3 from "../../../assets/images/test_images/selection_3.png";

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
            alert("3D 공간 상에서 모델을 컨트롤 할 수 있는 페이지 (미구현)");
          }}
        />
      </>
    );
  }

  function Waiting() {
    setTimeout(
      () => {
        setPage("DONE");
      },
      selectedImage.current === test_image ? 13000 : 10000
    );

    const imgixParameters = "w=800&fit=max&auto=format,compress";
    const src = test_loading + "?a=" + Math.random();

    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-45%",
          }}
        >
          <img src={src} style={{ width: "100%", zIndex: "-1" }} />
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
            var id = window.setTimeout(function () {}, 0);

            while (id--) {
              window.clearTimeout(id);
            }
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
            setTimeout(
              () => {
                setPage("DONE");
              },
              selectedImage.current === test_image ? 13000 : 10000
            );
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

  return (
    <div>
      {page === "WAITING" ? <Waiting /> : <></>}
      {page === "DONE" ? <MeshViewer /> : <></>}
      {page === "QR" ? <QRRequest /> : <></>}
      {page === "SELECT" ? <Select /> : <></>}
    </div>
  );
}

export default Viewer;
