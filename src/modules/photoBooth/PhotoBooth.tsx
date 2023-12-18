import "./styles/PhotoBooth.css";
import React from "react";
import { BrowserView, MobileOnlyView } from "react-device-detect";
import Desktop_Title from "modules/photoBooth/components/PBIntro";
import Header from "modules/photoBooth/components/PBTitle";

const PhotoBooth = () => {
  return (
    <>
      <Header></Header>
      <BrowserView>
        <h1>
          <Desktop_Title />
        </h1>
      </BrowserView>
      <MobileOnlyView>
        <h1>
          <Desktop_Title />
        </h1>
      </MobileOnlyView>
    </>
  );
};

export default PhotoBooth;
