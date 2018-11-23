import React, { Component } from "react";
import styled from "styled-components";
import barsSource from "./bars.svg";

export default class extends React.Component {
  render() {
    return <img src={barsSource} width={32} height={32} />;
  }
}
