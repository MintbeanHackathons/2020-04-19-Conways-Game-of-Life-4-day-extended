import React from "react";
import "./App.css";
import Grid from "./components/Grid";
import styled from "styled-components";

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
  return (
    <Container>
      <Grid />;
    </Container>
  );
}

export default App;
