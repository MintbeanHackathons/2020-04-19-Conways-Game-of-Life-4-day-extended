import React from "react";
import "./App.css";
import Grid from "./components/Grid";
import styled from "styled-components";

import useGridData from "./hooks/useGridData";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // padding: 10vw;
  background-color: black;
  height: 100vh;
  margin: 0;
`;

const Button = styled.button``;

function App() {
  const { grid, nextMove, changeAllMoves } = useGridData();
  return (
    <div>
      <Container>
        <Grid grid={grid} />
        <div>
          <Button
            style={{ backgroundColor: "orange" }}
            onClick={() => nextMove(grid)}
          >
            Next
          </Button>
          <Button onClick={() => changeAllMoves()}>Start</Button>
        </div>
      </Container>
    </div>
  );
}

export default App;
