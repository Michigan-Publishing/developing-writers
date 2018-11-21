import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import palette from "../../utils/palette";
import { textCss } from "../text/Text";
import TouchableOpacity from "../touchableOpacity";

const Heading = styled.h2`
  ${textCss};
  color: ${palette.yellow};
`;

const Container = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${palette.contentBackground};
  color: ${palette.white};
  ${textCss};
  font-size: 40px;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 90vw;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 40px;
  color: ${palette.white};
  margin-bottom: 20px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  width: 100vw;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.depth > 1 ? "row" : "column")};
  font-size: 18px;
  color: #fff;
`;

function buildLinks(items, depth = 0) {
  if (!items) {
    return null;
  }

  return items.map(item => (
    <Fragment>
      <Link to={item.slug}>{item.title}</Link>
      <LinkWrapper depth={depth}>
        {buildLinks(item.children, depth + 1)}
      </LinkWrapper>
    </Fragment>
  ));
}

export default class extends Component {
  componentDidMount() {
    this.div = document.createElement("div");
    document.body.appendChild(this.div);
  }

  render() {
    const { isVisible, onClose, items } = this.props;

    if (!isVisible) {
      return null;
    }

    const links = buildLinks(items);

    return (
      <Fragment>
        <Overlay onClick={onClose} />
        <Container>
          <CloseButton aria-label="Close" onClick={onClose}>
            <span aria-hidden="true">&times;</span>
          </CloseButton>
          <Heading>Navigation</Heading>
          {links}
        </Container>
      </Fragment>
    );
  }
}
