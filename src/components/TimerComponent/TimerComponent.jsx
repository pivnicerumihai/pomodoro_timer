import React, { useContext } from "react";

import useTimer from "../../hooks/useTimer";

import themeContext from "../../context/themeContext";

import TextComponent from "../TextComponent/TextComponent";
import "./TimerComponent.css";

function TimerComponent({ sessionTime, breakTime }) {
  const ThemeContext = useContext(themeContext);

  const sessionTimeLeft = useTimer(sessionTime);
  const breakTimeLeft = useTimer(breakTime);

  return (
    <div className={`timer ${ThemeContext === "light" ? "light" : "dark"}`}>
      <TextComponent className={"timer_clock"}>
        {sessionTime > 0 ? sessionTimeLeft : breakTimeLeft}
      </TextComponent>
    </div>
  );
}

export default TimerComponent;
