import React from "react";

import TextComponent from "../TextComponent/TextComponent";

import useTimer from "../../hooks/useTimer";

import "./CounterComponent.css";

function CounterComponent({
  counter_name,
  counter,
  counter_text,
  timer,
  increaseTime,
  descreaseTime,
}) {
  const time = useTimer(timer);

  return (
    <div className={"counter " + counter_name}>
      <TextComponent className={counter_text}>{counter}</TextComponent>
      <span className="minus" onClick={descreaseTime}>
        -
      </span>
      <TextComponent className={"counter_timer"}>{time}</TextComponent>
      <span className="plus" onClick={increaseTime}>
        +
      </span>
    </div>
  );
}

export default CounterComponent;
