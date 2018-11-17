import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import topRight from "./PurpleOrb.svg";
import bottomLeft from "./BlueOrb.svg";

import CurvedText from "./CurvedText";
import Text from "../text";
import { default as DefaultTouchableOpacity } from "../touchableOpacity";

import FlyoutNav from "../flyoutNav";

export const NavPosition = {
  top: "TOP",
  bottom: "BOTTOM"
};

const Image = styled.img`
  height: ${props => props.width}px;
  width: ${props => props.height}px;
`;

const TopRight = styled.div`
  position: fixed;
  top: 60px;
  right: 50px;
`;

const BottomLeft = styled.div`
  position: fixed;
  bottom: 60px;
  left: 50px;
`;

const TouchableOpacity = styled(DefaultTouchableOpacity)`
  z-index: 0;
  position: relative;
`;

export default class GlobeNav extends React.Component {
  static defaultProps = {
    position: NavPosition.top,
    diameter: 150
  };

  static propTypes = {
    id: PropTypes.string.isRequired
  };

  getFlyoutAngleSettings = () => {
    const { position, getFlyoutAngleSettings } = this.props;

    return getFlyoutAngleSettings
      ? getFlyoutAngleSettings(position)
      : {
          minAngle: 180,
          maxAngle: 270,
          baseAngle: position === NavPosition.top ? -240 : -75,
          menuButtonDiameter: 40,
          flyoutRadius: position === NavPosition.top ? 270 : 270
        };
  };

  render() {
    const {
      id: buttonId,
      position,
      onClick,
      children,
      diameter,
      topText,
      bottomText,
      bottomDx,
      bottomDy,
      topDx,
      topDy
    } = this.props;
    const Wrapper = position === NavPosition.top ? TopRight : BottomLeft;

    const extraStyle =
      position === NavPosition.top
        ? {
            top: 0,
            right: 0,
            transform: "rotate(0deg) scale(1.5)"
          }
        : { bottom: 0, left: 0, transform: "rotate(0deg) scale(1.5)" };

    const listStyle =
      position === NavPosition.top
        ? { position: "fixed", top: 50, right: 50 }
        : { position: "fixed", bottom: 50, left: 50 };

    return (
      <Wrapper>
        <CurvedText
          width={diameter}
          height={diameter}
          topText={topText}
          bottomText={bottomText}
          bottomDx={bottomDx}
          bottomDy={bottomDy}
          topDx={topDx}
          topDy={topDy}
          style={{
            position: "absolute",
            ...extraStyle
          }}
        />
        <FlyoutNav
          id={buttonId}
          listStyle={listStyle}
          angleSettings={this.getFlyoutAngleSettings()}
          renderToggle={(toggle, id, controlsId, isExpanded) => (
            <TouchableOpacity
              onClick={toggle}
              title={`${topText} ${bottomText}`}
              id={id}
              aria-controls={controlsId}
              aria-has-popup="true"
              aria-expanded="isExpanded"
              tabIndex="0"
            >
              <Image
                width={diameter}
                height={diameter}
                src={position === NavPosition.top ? topRight : bottomLeft}
              />
            </TouchableOpacity>
          )}
        >
          {children}
        </FlyoutNav>
      </Wrapper>
    );
  }
}
