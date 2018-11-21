import React from "react";
import styled from "styled-components";
import backgroundImage from "./background-transparent.png";

const Background = styled.div`
  background-color: #000;
  background: url(${props => props.src}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

const BackgroundWrapper = ({ children }) => (
  <Background src={backgroundImage}>{children}</Background>
);

export default BackgroundWrapper;
