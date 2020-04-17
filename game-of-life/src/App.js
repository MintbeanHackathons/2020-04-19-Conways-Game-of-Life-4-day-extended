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
  height: 80vh;
  margin: 0;
`;

const Button = styled.button``;

function App() {
  const { grid, nextMove, changeAllMoves } = useGridData();
  return (
    <div>
      <Container>
        <Grid grid={grid} />
      </Container>
      <Button onClick={() => nextMove(grid)}>click me</Button>
      <Button onClick={() => changeAllMoves()}>Me Too!</Button>
    </div>
  );
}

export default App;
