import React from "react";
import styled from "styled-components";
import palette from "../../utils/palette";
import { textCss } from "../text/Text";

const ContentWrapper = styled.div`
  ${textCss}
  background-color: ${palette.contentBackground};
  color: ${palette.white};
  overflow-y: scroll;
  padding: 20px;
  max-height: 80vh; 
  max-width: 50vw;
  margin-left: 25vw;
  position: relative;
  top: 10vh;
`;

export default class extends React.Component {
  render() {
    const { children } = this.props;
    return <ContentWrapper>{children}</ContentWrapper>;
  }
}
