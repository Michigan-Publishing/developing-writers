import React, { Component } from "react";
import styled from "styled-components";

const ButtonRow = styled.button`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export default class extends Component {
  render() {
    const { children } = this.props;

    return React.Children.map(children, item => <ButtonRow>{item}</ButtonRow>);
  }
}
