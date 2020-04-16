import React from "react";
import styled from "styled-components";

const Squares = styled.a`
  border: 1px solid black;
  background-color: white;
`;

export default function GridItem(props) {
  return <Squares>x</Squares>;
}
