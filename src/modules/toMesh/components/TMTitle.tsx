import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo_image from "../../../assets/images/Mingle_AI_BI_v1_20231114_white.png";

function Header() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const location = useLocation();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h1>
        <a href={location["pathname"]} rel="noreferrer">
          <img
            src={logo_image}
            alt="Title"
            style={{ width: 94 }}
            onClick={() => {}}
          />
        </a>
      </h1>
    </header>
  );
}

export default Header;
