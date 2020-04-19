import React from "react";
import styled from "styled-components";

import Square from "./GridItem";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(23, 1fr);
  // text-align: center;
  // background-color: red;
`;

export default function Grid(grid) {
  const squareList = grid.grid
    .flat()
    .map((curr, i) => <Square key={i} status={curr} />);

  return <Container>{squareList}</Container>;
}
