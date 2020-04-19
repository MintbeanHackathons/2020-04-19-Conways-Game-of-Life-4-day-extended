import React, { useState } from "react";
import styled from "styled-components";

const Buttons = styled.button``;

export default function Button({ grid, nextMove, changeAllMoves }) {
  // let text = "Start";
  const [text, setText] = useState("Start");

  const changeText = () => {
    setText(text === "Start" ? "Stop" : "Start");
  };

  const clicked = () => {
    changeAllMoves();
    changeText();
  };
  return (
    <div>
      <Buttons
        style={{ backgroundColor: "orange" }}
        onClick={() => nextMove(grid)}
      >
        next
      </Buttons>
      <Buttons onClick={() => clicked()}>{text}</Buttons>
    </div>
  );
}
