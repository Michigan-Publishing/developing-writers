import React from "react";
import styled from "styled-components";
import palette from "../../utils/palette";
import { textCss } from "../text/Text";

const ContentWrapper = styled.div`
  ${textCss}
  background-color: rgba(${palette.rgbContentBackground}, .9);
  box-shadow: 0px 0px 100px rgba(${palette.rgbContentBackground}, 100);
  color: ${palette.white};
  overflow-y: scroll;
  padding: 20px;
  max-height: 80vh; 
  max-width: 50vw;
  position: relative;
  top: 2.5vh;

  align-self: center;
  & h2 {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 10px;
  }
`;

export default class extends React.Component {
  render() {
    const { children, style } = this.props;
    return <ContentWrapper style={style}>{children}</ContentWrapper>;
  }
}
