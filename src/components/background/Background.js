import React from "react";
import styled from "styled-components";
import backgroundImage from "./background.png";

const Background = styled.div`
  background: url(${props => props.src}) no-repeat center center fixed;
  background-size: cover;
  min-height: 1000px;
`;

const BackgroundWrapper = ({ children }) => (
  <Background src={backgroundImage}>{children}</Background>
);

export default BackgroundWrapper;
