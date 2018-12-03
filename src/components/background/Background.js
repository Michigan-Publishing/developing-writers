import React from "react";
import standard from "./background.jpg";
import styled from "styled-components";

const Background = styled.div`
  background: url(${props => props.src}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BackgroundWrapper = ({ children, src }) => (
  <Background src={standard}>{children}</Background>
);

export default BackgroundWrapper;
