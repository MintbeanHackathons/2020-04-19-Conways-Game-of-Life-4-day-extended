import React from "react";
import styled from "styled-components";

const Squares = styled.a`
  height: 2vh;
  border: 1px solid black;
  background-color: green;
  color: transparent;
`;

export default function GridItem({ status }) {
  return status ? (
    <Squares style={{ backgroundColor: "blue" }}>o</Squares>
  ) : (
    <Squares>x</Squares>
  );
}
