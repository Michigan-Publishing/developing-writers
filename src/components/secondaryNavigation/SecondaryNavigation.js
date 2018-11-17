import React, { Component } from "react";
import styled from "styled-components";
import palette from "../../utils/palette";
import { textCss } from "../text/Text";

const Link = styled.a`
  color: ${palette.white};
  ${textCss};
`;

const ListContainer = styled.ul`
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
  render() {
    const { linkProperties } = this.props;
    if (!linkProperties) {
      return null;
    }
    return (
      <ListContainer>
        {linkProperties.map((link, index) => (
          <ListItem left={getRandomInt(35)} top={index * 90}>
            <Link href={link.href}>{link.title}</Link>
          </ListItem>
        ))}
      </ListContainer>
    );
  }
}
