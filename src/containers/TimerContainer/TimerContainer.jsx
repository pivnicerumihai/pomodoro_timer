import React, { useContext, useState, useEffect } from "react";

import ThemeContext from "../../context/themeContext";

import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import CounterComponent from "../../components/CounterComponent/CounterComponent";
import TextComponent from "../../components/TextComponent/TextComponent";
import TimerComponent from "../../components/TimerComponent/TimerComponent";

import "./TimerContainer.css";

function TimerContainerComponent() {
  const [sessionTime, setSessionTime] = useState(1500);
  const [breakTime, setBreakTime] = useState(300);
  const [started, setStarted] = useState(false);

  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    if (started) {
      if (sessionTime > 0) {
        setTimeout(() => setSessionTime(sessionTime - 1), 1000);
      } else if (breakTime > 0) {
        setTimeout(() => setBreakTime(breakTime - 1), 1000);
      }
    }
  });

  const handleStart = () => {
    setStarted(!started);
  };

  const handleIncreaseTime = (selectedTimer) => {
    if (selectedTimer === sessionTime) {
      setSessionTime(sessionTime + 60);
    } else {
      setBreakTime(breakTime + 60);
    }
    setStarted(false);
  };

  const handleDescreaseTime = (selectedTimer) => {
    if (selectedTimer === sessionTime) {
      if (sessionTime > 60) {
        setSessionTime(sessionTime - 60);
      }
    } else {
      if (breakTime > 60) {
        setBreakTime(breakTime - 60);
      }
    }
    setStarted(false);
  };

  const handleReset = () => {
    setSessionTime(1500);
    setBreakTime(300);
    setStarted(false);
  };

  return (
    <div className={"timer_container " + themeContext}>
      <TimerComponent sessionTime={sessionTime} breakTime={breakTime} />
      <TextComponent className={"session"}>{"Session"}</TextComponent>
      <CounterComponent
        counter_text={"session_text"}
        counter_name={"session_length"}
        counter={"Session Length"}
        timer={sessionTime}
        descreaseTime={() => handleDescreaseTime(sessionTime)}
        increaseTime={() => handleIncreaseTime(sessionTime)}
      />
      <CounterComponent
        counter_text={"break_text"}
        counter_name={"break_length"}
        counter={"Break Length"}
        timer={breakTime}
        descreaseTime={() => handleDescreaseTime(breakTime)}
        increaseTime={() => handleIncreaseTime(breakTime)}
      />
      <ButtonComponent className={"start_button"} handleClick={handleStart}>
        {started ? "Pause" : "Start"}
      </ButtonComponent>
      <ButtonComponent className={"reset_button"} handleClick={handleReset}>
        {"Reset"}
      </ButtonComponent>
    </div>
  );
}

export default TimerContainerComponent;
