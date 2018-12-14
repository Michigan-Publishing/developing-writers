import React, { Fragment } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Link as GatsbyLink } from "gatsby";
import SiteContainer from "../components/siteContainer";
import GlobeLink, { GlobeColor } from "../components/globeLink/GlobeLink";
import ContentArea from "../components/contentArea";
import Text from "../components/text";
import ViewportDisplay from "../components/viewportDisplay";
import Carousel from "../components/carousel";
import Breakpoints, {
  breakpointNames,
  breakpoints
} from "../components/breakpoints";
import { Media } from "react-breakpoints";

import { textCss } from "../components/text/Text";
import palette from "../utils/palette";

// eslint-disable-next-line
import styles from "../styles/global.css";

import {
  Link as LinkButton,
  LinkBackground
} from "../components/secondaryNavigation";

const StyledLinkButton = styled(LinkButton)`
  ${LinkBackground}
  z-index: 10;
`;

const LinkRow = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: ${props =>
    props.width > breakpoints[breakpointNames.tablet] ? "row" : "column"};
  justify-content: space-around;
  width: ${props => props.width}px;

  & a {
    ${props =>
      props.width < breakpoints[breakpointNames.tablet] &&
      "margin-bottom: 1em;"}
  }
`;

const SecondaryHeading = styled.h2`
  ${textCss}
  color: ${palette.white};
  margin: 1rem 0 0 0;
  background-opacity: .9;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
`;

const LinkText = styled(Text)`
  font-size: 1.5rem;
`;

const getSlideshowDimensions = breakpoint => {
  if (breakpoints[breakpoint] > breakpoints[breakpointNames.tablet]) {
    return { width: 1024, height: 576 };
  }

  if (breakpoints[breakpoint] > breakpoints[breakpointNames.mobile]) {
    return { width: 682, height: 384 };
  }

  return { width: 341, height: 192 };
};

export default props => (
  <Breakpoints>
    <SiteContainer {...props} showBreadcrumbs={false}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Developing Writers</title>
      </Helmet>
      <ContentWrapper>
        <Media>
          {({ breakpoints, currentBreakpoint }) => {
            const { width, height } = getSlideshowDimensions(currentBreakpoint);

            return (
              <Fragment>
                <Carousel width={width} height={height}>
                  <SecondaryHeading>
                    Welcome! Start here to find out what 169 students can tell
                    you about writing.
                  </SecondaryHeading>
                </Carousel>
                <LinkRow width={width}>
                  <StyledLinkButton to="/pages/writing-involves-choices">
                    <LinkText>Writing involves choices</LinkText>
                  </StyledLinkButton>
                  <StyledLinkButton to="/pages/writing-is-social">
                    <LinkText>Writing is social</LinkText>
                  </StyledLinkButton>
                </LinkRow>
              </Fragment>
            );
          }}
        </Media>
      </ContentWrapper>
    </SiteContainer>
  </Breakpoints>
);

export const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            key
            parentKey
            title
          }
        }
      }
    }
  }
`;
