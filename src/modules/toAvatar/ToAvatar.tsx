import React from "react";
import BrowserViewInfo from "common/components/BrowserViewInfo";
import { BrowserView, MobileOnlyView } from "react-device-detect";

const ToAvatar = () => {
  return (
    <>
      <BrowserView>
        <BrowserViewInfo />
      </BrowserView>
      <MobileOnlyView>
        <h1>This is rendered only in mobile device</h1>
      </MobileOnlyView>
    </>
  );
};

export default ToAvatar;
