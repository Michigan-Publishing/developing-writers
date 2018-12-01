import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import SiteContainer from "../components/siteContainer";
import GlobeLink, { GlobeColor } from "../components/globeLink/GlobeLink";
import ContentArea from "../components/contentArea";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export default props => (
  <SiteContainer {...props} showBreadcrumbs={false}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Developing Writers</title>
    </Helmet>

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
