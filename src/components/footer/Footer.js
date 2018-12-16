import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import palette from "../../utils/palette";
import { textCss } from "../text/Text";
import { TABLET_LANDSCAPE_WIDTH } from "../../constants";

import logo from "./umich-logo.png";

export const FOOTER_HEIGHT = 172;

const FooterWrapper = styled.footer`
  border-top: 3px solid ${palette.relatedBackground};
  background-color: ${palette.lightBackground};
  width: 100vw;
  min-height: ${FOOTER_HEIGHT}px;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${textCss}
  padding: 1rem 0 2rem 0;
  color: ${palette.relatedBackground};

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    flex-direction: column;
  }
`;

const Heading = styled.h4`
  font-size: 1.5rem;
  margin: 1rem 0;
  padding: 0;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  width: 32%;

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    width: 100%;
  }
`;

const Left = styled.div`
  width: 50%;
  padding-left: 1rem;

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const Right = styled(Left)`
  width: 50%;
  padding-left: unset;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;
`;

const Link = styled(GatsbyLink)`
  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
`;
const ChildLink = styled(Link)`
  margin: 0.5rem;
  font-size: 0.75rem;
  line-height: 0.8rem;

  @media (max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

class Footer extends Component {
  getLinkColumn = link => {
    return (
      <Fragment>
        <Link to={link.slug}>
          <strong>{link.title}</strong>
        </Link>
        {link.children.map(childLink => (
          <ChildLink key={childLink.slug} to={childLink.slug}>
            {childLink.title}
          </ChildLink>
        ))}
      </Fragment>
    );
  };
  render() {
    return (
      <FooterWrapper>
        <Left>
          <Heading>Developing Writers</Heading>
          <ColumnWrapper>
            <Column>
              <Link to="#">
                <strong>About</strong>
              </Link>
            </Column>
            {this.props.links.map(link => (
              <Column key={link.slug}>{this.getLinkColumn(link)}</Column>
            ))}
          </ColumnWrapper>
        </Left>
        <Right>
          <img
            alt="University of Michigan logo"
            src={logo}
            height="125px"
            width="auto"
          />
        </Right>
      </FooterWrapper>
    );
  }
}
export default Footer;
