import { Description, Title } from "modules/toMesh/components/TMComponents";
import { useState } from "react";
import test_image from "../../../assets/images/test_images/Mesh.png";
import test_loading from "../../../assets/images/test_images/Loading.mp4";

function Viewer() {
  const [page, setPage] = useState("WAITING");

  function MeshViewer() {
    return (
      <>
        <img src={test_image} style={{ width: "100%", marginTop: "15%" }} />
        <input
          type="button"
          value="Play in CES"
          style={{
            width: "44%",
            height: 70,
            position: "fixed",
            bottom: 0,
            right: "4%",
            borderRadius: 30,
            backgroundColor: "yellowgreen",
            fontSize: 24,
            color: "black",
          }}
        />
        <div style={{ bottom: "20%" }}>
          <Title val="This is awesome!" />
          <Description val="Your original photo was discarded. 3D model will be discarded when this window closes." />
        </div>
        <input
          type="button"
          value="Play in CES"
          style={{
            width: "44%",
            height: 70,
            position: "fixed",
            bottom: 0,
            right: "4%",
            borderRadius: 30,
            backgroundColor: "yellowgreen",
            fontSize: 24,
            color: "black",
          }}
          onClick={() => {
            alert("미구현 페이지");
          }}
        />
        <input
          type="button"
          value="Download"
          style={{
            width: "44%",
            height: 70,
            position: "fixed",
            bottom: 0,
            left: "4%",
            borderRadius: 30,
            backgroundColor: "yellowgreen",
            fontSize: 24,
            color: "black",
          }}
          onClick={() => {
            alert("미구현 기능");
          }}
        />
      </>
    );
  }
  function Waiting() {
    setTimeout(() => {
      setPage("DONE");
    }, 15000);

    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-45%",
          }}
        >
          <video muted autoPlay style={{ width: "100%", zIndex: "-1" }}>
            <source src={test_loading} type="video/mp4" />
          </video>
        </div>
        <input
          type="button"
          value="완성되면 알려줄까?"
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
            alert("푸시 알림 미구현 상태 \n(서버 통합 후 적용 예정)");
          }}
        />
      </>
    );
  }

  const button_notification = (
    <div>
      {page === "WAITING" ? <Waiting /> : <></>}
      {page === "DONE" ? <MeshViewer /> : <></>}
    </div>
  );
  return button_notification;
}

export default Viewer;
