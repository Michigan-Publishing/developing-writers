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
import Breakpoints, { breakpointSizes } from "../components/breakpoints";
import { Media } from "react-breakpoints";

import { textCss } from "../components/text/Text";
import palette from "../utils/palette";

// eslint-disable-next-line
import styles from "../styles/global.css";

const LinkButton = styled(GatsbyLink)`
  display: flex;
  justify-content: center;
  align-items:center;
  flex: 1;
  text-align: center;
  margin: 0 20px;
  height: 64px;
  ${textCss}
  background-color: rgba(${palette.rgbRelatedBackground}, .9);
  color: ${palette.white};
  padding: 1.5rem;
  text-decoration: none;
`;

const LinkRow = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: space-between;
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

const LightBackground = styled.div`
  border-top: 5px solid ${palette.relatedBackground};
  background-color: ${palette.lightBackground};
  padding: 2rem 0;

  & h2 {
    color: ${palette.relatedBackground};
    margin: 0;
    width: 100%;
    text-align: center;
  }
`;

export default props => (
  <Breakpoints>
    <SiteContainer {...props} showBreadcrumbs={false}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Developing Writers</title>
      </Helmet>
      <ContentWrapper>
        <Media>
          {({ breakpoints, currentBreakpoint }) => (
            <Carousel
              width={currentBreakpoint === breakpointSizes.desktop ? 1024 : 682}
              height={currentBreakpoint === breakpointSizes.desktop ? 576 : 384}
            >
              <LightBackground>
                <h2>
                  Welcome! Here’s what 169 college students taught us about
                  writing.
                </h2>
                <LinkRow>
                  <LinkButton to="/pages/writing-involves-choices">
                    <LinkText>Writing involves choices</LinkText>
                  </LinkButton>
                  <LinkButton to="/pages/writing-is-social">
                    <LinkText>Writing is social</LinkText>
                  </LinkButton>
                </LinkRow>
              </LightBackground>
            </Carousel>
          )}
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
