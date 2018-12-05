import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { textCss } from "../text/Text";
import palette from "../../utils/palette";

const BreadcrumbWrapper = styled.div`
  margin: .75rem 0;
  display: flex;
  flex-direction: row;
  ${textCss}
  color: ${palette.white};

  a, a:visited {
    margin: 0 .75rem;
    color: ${palette.white};
    opacity: .8;
  }

  a:first-child {
    margin-right: .75rem;
    margin-left: 0;
  }

  span:not(:last-child)::after {
    content: ">";
    margin-right: .75rem;
    opacity: .6;
  }

`;

const LinkWrapper = styled.span``;
export default class extends Component {
  render() {
    const { items } = this.props;
    return items && items.length > 0 ? (
      <BreadcrumbWrapper>
        {items.map((item, index) =>
          index !== items.length - 1 ? (
            <LinkWrapper>
              <Link to={item.slug}>{item.title}</Link>
            </LinkWrapper>
          ) : (
            <LinkWrapper>{item.title}</LinkWrapper>
          )
        )}
      </BreadcrumbWrapper>
    ) : null;
  }
}
