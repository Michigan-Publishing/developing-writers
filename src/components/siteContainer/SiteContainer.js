import React, { Component } from "react";
import styled from "styled-components";
import Background from "../background";
import SiteHeading from "../siteHeading";

const ContentArea = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
  position: relative;
`;
export default class extends Component {
  render() {
    return (
      <Background>
        <SiteHeading />
        <ContentArea>{this.props.children}</ContentArea>
      </Background>
    );
  }
}
