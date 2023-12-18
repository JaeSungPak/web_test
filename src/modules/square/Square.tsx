import React from "react";
import { BrowserView, MobileOnlyView } from "react-device-detect";
import { SocketManager } from "modules/square/components/SocketManager";
import SquareBrowserView from "./components/SquareBrowserView";
import SquareMobileView from "./components/SquareMobileView";
import "modules/square/styles/Square.css";

const Square = () => {
  return (
    <>
      <SocketManager />
      <BrowserView>
        <div className="SquareBrowser">
          <SquareBrowserView />
        </div>
      </BrowserView>
      <MobileOnlyView>
        <div className="SquareMobile">
          <SquareMobileView />
        </div>
      </MobileOnlyView>
    </>
  );
};

export default Square;
