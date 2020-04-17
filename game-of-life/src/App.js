import React from "react";
import "./App.css";
import Grid from "./components/Grid";
import styled from "styled-components";

import useGridData from "./hooks/useGridData";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 10vw;
  background-color: blue;
  height: 100vh;
  margin: 0;
`;

const Button = styled.button``;

function App() {
  const { grid, nextMove, changeAllMoves } = useGridData();
  return (
    <Container>
      <Grid grid={grid} />
      <Button onClick={() => nextMove(grid)}>click me</Button>
      <Button onClick={() => changeAllMoves()}>Me Too!</Button>
    </Container>
  );
}

export default App;
