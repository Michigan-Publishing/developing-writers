import React, { Component } from "react";
import styled from "styled-components";
import palette from "../../utils/palette";
import { textCss } from "../text/Text";

const padding = 20;
const Link = styled.a`
  color: ${palette.white};
  ${textCss};
  font-size: 30px;
  text-decoration: none;
  position: flex;

  &:after {
    content: " ";
    display: block;
    border-bottom: 1px solid ${palette.white};
    opacity: 0.5;
  }
`;

const ListContainer = styled.ul`
  padding: ${padding}px 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  list-style-type: none;
  position: relative;
`;

const ListItem = styled.li`
  position: absolute;
  left: ${props => props.left}%;
  top: ${props => props.top}px;
`;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default class extends Component {
  state = { paddingHeight: 90 };
  mounted = false;

  componentDidMount() {
    this.getPaddingAmount();
    window.addEventListener("resize", this.getPaddingAmount);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getPaddingAmount);
  }

  getPaddingAmount = () => {
    const { linkProperties } = this.props;
    const height = this.container.clientHeight / linkProperties.length;
    this.setState({ paddingHeight: height > 90 ? 90 : height });
  };

  render() {
    const { linkProperties } = this.props;
    const { paddingHeight } = this.state;

    if (!linkProperties) {
      return null;
    }
    return (
      <ListContainer ref={node => (this.container = node)}>
        {linkProperties.map((link, index) => (
          <ListItem left={getRandomInt(35)} top={index * paddingHeight}>
            <Link href={link.href}>{link.title}</Link>
          </ListItem>
        ))}
      </ListContainer>
    );
  }
}