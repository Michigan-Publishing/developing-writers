import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Spring, Trail, config } from "react-spring";

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

  a,
  a:visited,
  a:active {
    text-decoration: none;
    color: ${palette.white};
  }
`;

const LinkContainer = styled.div`
  opacity: ${props => props.opacity};
  margin: 30px 0;
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
  flex-wrap: wrap;
  font-size: ${props => 1.4 - 0.1 * props.depth}rem;
  flex-direction: ${props => (props.depth >= 1 ? "row" : "column")};
  font-weight: ${props => (props.depth >= 1 ? "normal" : "bold")};
  opacity: ${props => (props.depth >= 1 ? 0.8 : 0.6)};
  color: #fff;

  & > div {
    margin-bottom: ${props => (props.depth >= 1 ? "auto" : "20px")};
  }

  a {
    display: inline-block;
    margin: 20px;
    margin-top: ${props => (props.depth >= 1 ? 10 : 30)}px;
  }
`;

const LinkBlockWrapper = styled.div`
  margin-bottom: 30px;
`;

function buildLinks(items, depth = 0) {
  if (!items) {
    return null;
  }

  return items.map(item => (
    <LinkBlockWrapper>
      <Link to={item.slug}>{item.title}</Link>

      <LinkWrapper depth={depth} data-depth={depth}>
        {buildLinks(item.children, depth + 1)}
      </LinkWrapper>
    </LinkBlockWrapper>
  ));
}

const OPEN_WIDTH = "90vw";
const CLOSED_WIDTH = "0vw";
const OPEN_OPACITY = 1;
const CLOSED_OPACITY = 0;

export default class extends Component {
  state = {
    shouldClose: false,
    nextWidth: OPEN_WIDTH,
    nextOpacity: OPEN_OPACITY
  };

  componentDidMount() {
    this.div = document.createElement("div");
    document.body.appendChild(this.div);
  }

  onClose = () => {
    this.setState({
      shouldClose: true,
      nextWidth: CLOSED_WIDTH,
      nextOpacity: CLOSED_OPACITY
    });
  };

  afterAnimation = () => {
    if (this.state.shouldClose) {
      this.setState(
        {
          shouldClose: false,
          nextWidth: OPEN_WIDTH,
          nextOpacity: OPEN_OPACITY
        },
        () => this.props.onClose()
      );
    }
  };

  render() {
    const { isVisible, items } = this.props;

    if (!isVisible) {
      return null;
    }

    const links = buildLinks(items);
    return (
      <Fragment>
        <Overlay onClick={this.onClose} />
        <Spring
          from={{ width: CLOSED_WIDTH, opacity: CLOSED_OPACITY }}
          to={{ width: this.state.nextWidth, opacity: this.state.nextOpacity }}
          onRest={this.afterAnimation}
        >
          {props => (
            <Container style={{ width: props.width, opacity: props.opacity }}>
              <CloseButton aria-label="Close" onClick={this.onClose}>
                <span aria-hidden="true">&times;</span>
              </CloseButton>
              <Heading>Navigation</Heading>
              <LinkContainer opacity={props.opacity}>{links}</LinkContainer>
            </Container>
          )}
        </Spring>
      </Fragment>
    );
  }
}
