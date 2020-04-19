import React from "react";
import styled from "styled-components";

const Buttons = styled.button``;

export default function Button({ grid, nextMove, changeAllMoves }) {
  let text = "Start";
  return (
    <div>
      <Buttons
        style={{ backgroundColor: "orange" }}
        onClick={() => nextMove(grid)}
      >
        next
      </Buttons>
      <Buttons onClick={() => changeAllMoves()}>{text}</Buttons>
    </div>
  );
}
