import React, { useContext } from "react";

import themeContext from "../../context/themeContext";

import "./SwitchComponent.css";

function SwitchComponent({ toggleTheme }) {
  const ThemeContext = useContext(themeContext);

  return (
    <div className="switch">
      <span
        className={`left_switch ${ThemeContext === "dark" ? "inactive" : ""}`}
      >
        Light
      </span>
      <span
        className={`switch_button ${
          ThemeContext === "light" ? "light" : "dark"
        }`}
        onClick={() => {toggleTheme.toggleTheme()}}
      ></span>
      <span
        className={`right_switch ${ThemeContext === "light" ? "inactive" : ""}`}
      >
        Dark
      </span>
    </div>
  );
}

export default SwitchComponent;
