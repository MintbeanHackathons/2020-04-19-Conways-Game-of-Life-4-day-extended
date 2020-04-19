import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 10vh;
  // flex-flow: space-around;
  // align-items: center;
`;

const Buttons = styled.button`
  font-size: 5vh;
  margin: 0 1vw;
`;

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
    <Container>
      <Buttons onClick={() => nextMove(grid)}>next</Buttons>
      <Buttons onClick={() => clicked()}>{text}</Buttons>
    </Container>
  );
}
