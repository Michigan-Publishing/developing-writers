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

// eslint-disable-next-line
import styles from "../styles/global.css";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
`;

const Link = styled(GatsbyLink)`
  margin-bottom: 2rem;
`;
const LinkText = styled(Text)`
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

export default props => (
  <SiteContainer {...props} showBreadcrumbs={false}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Developing Writers</title>
    </Helmet>

    <ViewportDisplay
      desktopRender={
        <Fragment>
          <GlobeLink
            color={GlobeColor.blue}
            topText="Writing involves"
            bottomText="choices"
            style={{ position: "absolute", top: 20, right: 40, zIndex: 0 }}
            bottomDx={65}
            bottomDy={-5}
            topDx={0}
            to="/pages/writing-involves-choices"
          />
          <ContentWrapper>
            <ContentArea
              style={{
                height: 300,
                width: "50vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: -150
              }}
            >
              <h1 style={{ fontSize: 30, fontWeight: "800" }}>Placeholder</h1>
            </ContentArea>
          </ContentWrapper>
          <GlobeLink
            color={GlobeColor.purple}
            topText="Writing is"
            bottomText="social"
            bottomDx={75}
            bottomDy={-5}
            topDx={55}
            style={{ position: "absolute", bottom: 50, left: 25, zIndex: 0 }}
            to="/pages/writing-is-social"
          />
        </Fragment>
      }
      mobileRender={
        <MobileWrapper>
          <Link to="/pages/writing-involves-choices">
            <LinkText>Writing involves choices</LinkText>
          </Link>
          <Link to="/pages/writing-is-social">
            <LinkText>Writing is social</LinkText>
          </Link>
          <ContentArea
            style={{
              height: 300,
              width: "50vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <h1 style={{ fontSize: 30, fontWeight: "800" }}>Placeholder</h1>
          </ContentArea>
        </MobileWrapper>
      }
    />
  </SiteContainer>
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
