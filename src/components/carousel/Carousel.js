import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ImageContent, Whirl } from "react-whirl";

import * as breakpoints from "../../constants";

import palette from "../../utils/palette";
import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import slide4 from "./slide4.jpg";
import slide5 from "./slide5.jpg";
import slide6 from "./slide6.jpg";
import slide7 from "./slide7.jpg";
import slide8 from "./slide8.jpg";
import slide9 from "./slide9.jpg";
import slide10 from "./slide10.jpg";
import slide11 from "./slide11.jpg";

import { textCss } from "../text/Text";
const Wrapper = styled.div`
  ${textCss}
  background-color: rgba(${palette.rgbContentBackground}, .9);
  box-shadow: 0 0 6.25rem rgba(${palette.rgbContentBackground}, 100);
  color: ${palette.white};
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1024px;
  height: 576px;

  @media(max-width: ${breakpoints.TABLET_LANDSCAPE_WIDTH}px) {
    width: 682.6px;
    height: 384px;
  }

  @media(max-width: ${breakpoints.TABLET_WIDTH}px) {
    width: 512px;
    height: 288px;
  }

  @media(max-width: ${breakpoints.MOBILE_WIDTH}px) {
    height: 256px;
    width: 144px;
  }
`;

const Button = styled.button`
  background-color: ${palette.contentBackground};
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  height: 48px;
  width: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Next = onNext => <Button onClick={onNext}>⟩</Button>;
const Previous = onPrevious => <Button onClick={onPrevious}>⟨</Button>;

export default class extends React.Component {
  static defaultProps = {
    width: 1024,
    height: 576
  };

  state = { mounted: false };

  componentDidMount() {
    this.setState({ mounted: true });
  }
  render() {
    return (
      <Wrapper>
        <Whirl
          controlsStyle={{
            top: "50%",
            marginLeft: "-25px",
            width: "calc(100% + 50px)"
          }}
          next={Next}
          previous={Previous}
        >
          <ImageContent
            imgSrc={slide1}
            caption="First image"
            description="First slide"
          />
          <ImageContent
            imgSrc={slide2}
            caption="Second image"
            description="Second slide"
          />
          <ImageContent
            imgSrc={slide3}
            caption="Third image"
            description="Third slide"
          />
          <ImageContent
            imgSrc={slide4}
            caption="Fourth image"
            description="Fourth slide"
          />
          <ImageContent
            imgSrc={slide5}
            caption="Fifth image"
            description="Fifth slide"
          />
          <ImageContent
            imgSrc={slide6}
            caption="Sixth image"
            description="Sixth slide"
          />
          <ImageContent
            imgSrc={slide7}
            caption="Seventh image"
            description="Seventh slide"
          />
          <ImageContent
            imgSrc={slide8}
            caption="Eighth image"
            description="Eighth slide"
          />
          <ImageContent
            imgSrc={slide9}
            caption="Ninth image"
            description="Ninth slide"
          />
          <ImageContent
            imgSrc={slide10}
            caption="Tenth image"
            description="Tenth slide"
          />
          <ImageContent
            imgSrc={slide11}
            caption="Eleventh image"
            description="Eleventh slide"
          />
        </Whirl>
        {this.props.children}
      </Wrapper>
    );
  }
}
