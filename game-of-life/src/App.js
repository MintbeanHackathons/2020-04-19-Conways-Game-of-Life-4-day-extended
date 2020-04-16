import React from "react";
import "./App.css";
import Grid from "./components/Grid";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 10vw;
`;

function App() {
  return (
    <Container>
      <Grid />;
    </Container>
  );
}

export default App;
