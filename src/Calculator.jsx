import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (input === "Error") {
      setInput(value);
    } else {
      setInput((prevnum) => prevnum + value);
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString()); // Note: eval is unsafe; consider mathjs for production
    } catch (error) {
      setInput("Error");
    }
  };

  const handleBackspace = () => {
    if (input === "Error") {
      setInput("");
    } else {
      setInput((prevnum) => prevnum.slice(0, -1));
    }
  };

  const buttons = [
    "/",
    "9",
    "8",
    "*",
    "7",
    "6",
    ".",
    "5",
    "4",
    "-",
    "3",
    "2",
    "+",
    "1",
    "0",
    "=",
  ];

  return (
    <>
      <h2 className="styleme">MY SIMPLE CALCULATOR APP</h2>
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="keypad">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => (btn === "=" ? handleEqual() : handleClick(btn))}
            >
              {btn}
            </button>
          ))}
          <button onClick={handleBackspace} className="backSpace">
            ←
          </button>
          <button onClick={handleClear} className="clear">
            C
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
