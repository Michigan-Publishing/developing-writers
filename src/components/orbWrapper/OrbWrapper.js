import React from "react";
import styled from "styled-components";
import palette from "../../utils/palette";

const Circle = styled.div`
  width: ${props => props.diameter}px;
  height: ${props => props.diameter}px;
  border-radius: ${props => props.diameter}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color}
  box-shadow: inset 0 0 15px ${props => props.color};
  transform: scale(1);
  transition: transform 200ms;

  &:hover {
    transform: scale(1.2);
  }
`;

export default class extends React.Component {
  state = { isHovered: true };

  static defaultProps = {
    diameter: 100,
    color: palette.blueMain
  };

  render() {
    const { children } = this.props;
    return (
      <Circle diameter={this.props.diameter} color={this.props.color}>
        {children}
      </Circle>
    );
  }
}
