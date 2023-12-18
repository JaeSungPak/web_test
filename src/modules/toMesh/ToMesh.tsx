import "./styles/ToMesh.css";
import React from "react";
import { BrowserView, MobileOnlyView } from "react-device-detect";
import Desktop_Title from "modules/toMesh/components/TMIntro";
import Header from "modules/toMesh/components/TMTitle";

const ToMesh = () => {
  return (
    <>
      <Header></Header>
      <BrowserView>
        <h1 style={{ color: "white" }}>Coming Soon</h1>
      </BrowserView>
      <MobileOnlyView>
        <h1>
          <Desktop_Title />
        </h1>
      </MobileOnlyView>
    </>
  );
};

export default ToMesh;
