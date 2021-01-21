import React, { useContext } from "react";

import TextComponent from "../TextComponent/TextComponent";
import themeContext from "../../context/themeContext";

import "./SwitchComponent.css";

function SwitchComponent({ toggleTheme }) {
  const ThemeContext = useContext(themeContext);

  return (
    <>
      <TextComponent
        className={`left_switch ${ThemeContext === "dark" ? "inactive" : ""}`}
      >
        Light
      </TextComponent>
      <span className="switch_background"></span>
      <span
        className={`switch_button ${
          ThemeContext === "light" ? "light" : "dark"
        }`}
        onClick={toggleTheme}
      ></span>
      <TextComponent
        className={`right_switch ${ThemeContext === "light" ? "inactive" : ""}`}
      >
        Dark
      </TextComponent>
    </>
  );
}

export default SwitchComponent;
