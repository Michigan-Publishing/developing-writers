import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import palette from "../../utils/palette";
const HeadingWrapper = styled.div`
  font-family: Helvetica, sans-serif;
  font-size: 45px;
  font-weight: normal;
  color: ${palette.white};
  text-transform: uppercase;

  &:after {
    content: " ";
    display: block;
    border: 1px solid ${palette.yellowLine};
    margin-top: 20px;
    max-width: 700px;
  }

  & a {
    text-decoration: none;
    color: #fff;
  }
`;

export default class extends Component {
  render() {
    return (
      <HeadingWrapper>
        <Link to="/">Developing Writers</Link>
      </HeadingWrapper>
    );
  }
}
