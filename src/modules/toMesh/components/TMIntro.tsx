import { useState, useEffect } from "react";
import { Title, Description } from "modules/toMesh/components/TMComponents";
import banner_image from "../../../assets/images/test_images/Banner.png";
import Desktop_Booth from "modules/toMesh/components/TMUpload";

function Banner() {
  return (
    <header>
      <h1>
        <img
          src={banner_image}
          style={{
            margin: "10%",
            width: "80%",
          }}
          alt="Title"
        />
      </h1>
    </header>
  );
}

function Desktop_Title() {
  const [page, setPage] = useState("TITLE");

  const title_page = (
    <>
      <Title val="Take your photo into 3D Mesh" />
      <Description
        val="
      We build the AI model to generate a high-quality 3D model from a single
      picture within 3 minutes. You can try our model in this demo webpage with
      minimum effort. Don't hesitate it."
      />
      <input
        type="button"
        value="Start"
        style={{
          inlineSize: "90%",
          fontSize: 36,
          marginTop: 30,
          margin: "5%",
          background: "#98FA4B",
          borderRadius: 20,
          height: 70,
          width: "90%",
        }}
        onClick={() => {
          setPage("UPLOAD");
        }}
      />
      <Banner />
    </>
  );

  const booth_page = <div />;

  return (
    <div className="App">
      {page === "TITLE" ? title_page : <></>}{" "}
      {page === "UPLOAD" ? <Desktop_Booth /> : <></>}{" "}
    </div>
  );
}

export default Desktop_Title;
