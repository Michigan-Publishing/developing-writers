import React from "react";
import styled from "styled-components";

import topRight from "./TopRight.svg";
import bottomLeft from "./BottomLeft.svg";

import CurvedText from "./CurvedText";
import Text from "../text";

export const NavPosition = {
  top: "TOP",
  bottom: "BOTTOM"
};

const TopRight = styled.div`
  position: fixed;
  top: 0;
  right: 0;
`;

const BottomLeft = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
`;

export default class GlobeNav extends React.Component {
  static defaultProps = {
    position: NavPosition.top
  };

  render() {
    const { position } = this.props;
    const Wrapper = position === NavPosition.top ? TopRight : BottomLeft;

    const extraStyle =
      position === NavPosition.top
        ? {
            bottom: -10,
            left: -10,
            transform: "rotate(180deg)"
          }
        : { bottom: 10, left: 10 };

    return (
      <Wrapper>
        <CurvedText
          style={{
            position: "absolute",
            ...extraStyle
          }}
        >
          This is the text!
        </CurvedText>
        <img src={position === NavPosition.top ? topRight : bottomLeft} />
      </Wrapper>
    );
  }
}
