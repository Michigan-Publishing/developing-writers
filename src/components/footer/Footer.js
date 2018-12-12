import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import palette from "../../utils/palette";
import { textCss } from "../text/Text";

import logo from "./umich-logo.png";

export const FOOTER_HEIGHT = 172;

const FooterWrapper = styled.footer`
  border-top: 1px solid ${palette.relatedBackground};
  background-color: rgba(${palette.rgbContentBackground}, 0.7);
  width: 100vw;
  min-height: ${FOOTER_HEIGHT}px;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${textCss}
  padding: 1rem 0 2rem 0;
  color: ${palette.white};
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  width: 32%;
`;

const Left = styled.div`
  width: 50%;
  padding-left: 1rem;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;
`;

const ChildLink = styled(Link)`
  margin: 0.5rem;
  font-size: 0.75rem;
  line-height: 0.8rem;
`;

class Footer extends Component {
  getLinkColumn = link => {
    return (
      <Fragment>
        <Link to={link.slug}>
          <strong>{link.title}</strong>
        </Link>
        {link.children.map(childLink => (
          <ChildLink to={childLink.slug}>{childLink.title}</ChildLink>
        ))}
      </Fragment>
    );
  };
  render() {
    return (
      <FooterWrapper>
        <Left>
          <h4>Developing Writers</h4>
          <ColumnWrapper>
            <Column>
              <Link to="#">
                <strong>About</strong>
              </Link>
            </Column>
            {this.props.links.map(link => (
              <Column>{this.getLinkColumn(link)}</Column>
            ))}
          </ColumnWrapper>
        </Left>
        <Right>
          <img src={logo} height="125px" width="auto" />
        </Right>
      </FooterWrapper>
    );
  }
}
export default Footer;
