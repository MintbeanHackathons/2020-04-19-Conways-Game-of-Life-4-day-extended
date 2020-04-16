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

function App() {
  const { grid } = useGridData();
  return (
    <Container>
      <Grid grid={grid} />;
    </Container>
  );
}

export default App;
