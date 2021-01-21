import React from "react";

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
      <p className={counter_text}>{counter}</p>
      <div className="counter_settings">
        <span className="minus" onClick={descreaseTime}>-</span>
        <p className={"counter_timer"}>{time}</p>
        <span className="plus" onClick={increaseTime}>
          +
        </span>
      </div>
    </div>
  );
}

export default CounterComponent;
