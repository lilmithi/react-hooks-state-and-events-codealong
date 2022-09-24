import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  function toggleHandler() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "white";
  return (
    <button style={{ background: color }} onClick={toggleHandler}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
