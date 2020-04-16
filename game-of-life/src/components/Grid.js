import React from "react";
import styled from "styled-components";

import Square from "./GridItem";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 2vw);
  text-align: center;
  // background-color: red;
`;

export default function Grid() {
  const squareList = [];
  for (let i = 0; i < 100; i++) {
    squareList.push(<Square />);
  }
  return <Container>{squareList}</Container>;
}
