import React from "react";
import styled from "styled-components";

import topRight from "./TopRight.svg";
import bottomLeft from "./BottomLeft.svg";

import CurvedText from "./CurvedText";
import Text from "../text";
import { default as DefaultTouchableOpacity } from "../touchableOpacity";

import FlyoutNav from "../flyoutNav";

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

const TouchableOpacity = styled(DefaultTouchableOpacity)`
  z-index: 0;
  position: relative;
`;

export default class GlobeNav extends React.Component {
  static defaultProps = {
    position: NavPosition.top,
    text: "Text"
  };

  getFlyoutAngleSettings = () => {
    const { position, getFlyoutAngleSettings } = this.props;

    return getFlyoutAngleSettings
      ? getFlyoutAngleSettings(position)
      : {
          minAngle: 180,
          maxAngle: 270,
          baseAngle: position === NavPosition.top ? -250 : -75,
          menuButtonDiameter: 40,
          flyoutRadius: position === NavPosition.top ? 470 : 570
        };
  };

  render() {
    const { position, onClick, children, text } = this.props;
    const Wrapper = position === NavPosition.top ? TopRight : BottomLeft;

    const extraStyle =
      position === NavPosition.top
        ? {
            bottom: -10,
            left: -10,
            transform: "rotate(180deg)"
          }
        : { bottom: 10, left: 10 };

    const listStyle =
      position === NavPosition.top
        ? {}
        : { right: "unset", left: 0, bottom: 0, top: "unset" };

    return (
      <Wrapper>
        <CurvedText
          style={{
            position: "absolute",
            ...extraStyle
          }}
        >
          {text}
        </CurvedText>
        <FlyoutNav
          listStyle={listStyle}
          angleSettings={this.getFlyoutAngleSettings()}
          renderToggle={toggle => (
            <TouchableOpacity onClick={toggle}>
              <img src={position === NavPosition.top ? topRight : bottomLeft} />
            </TouchableOpacity>
          )}
        >
          {children}
        </FlyoutNav>
      </Wrapper>
    );
  }
}
