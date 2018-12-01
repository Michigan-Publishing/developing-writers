import React from "react";
import styled from "styled-components";

import { Link } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/tag";
import { Helmet } from "react-helmet";

import ContentArea from "../components/contentArea";
import Navigation from "../components/secondaryNavigation";
import SiteContainer from "../components/siteContainer";
import ExpandablePanel from "../components/expandablePanel";
import Markdown from "../components/markdown";
import RelatedContent from "../components/relatedContent";

function mapLinkProperties(edges) {
  if (!edges) {
    return [];
  }

  const output = edges.map(edge => ({
    title: edge.node.frontmatter.title,
    href: edge.node.fields.slug
  }));

  return output;
}

function shouldShowRelatedContent(data) {
  return (
    data &&
    data.siblingPages &&
    data.siblingPages.edges &&
    data.siblingPages.edges.length > 0 &&
    shouldShowChildLinks(data) === false
  );
}

function mapSiblingContent(data) {
  if (!shouldShowRelatedContent(data)) {
    return null;
  }

  return data.siblingPages.edges.map(({ node }) => ({
    href: node.fields.slug,
    title: node.frontmatter.title
  }));
}

function shouldShowChildLinks(data) {
  return !!(data.childPages && data.childPages.edges.length > 0);
}

class NavigationPagesTemplate extends React.Component {
  render() {
    const {
      pageContext: { title, section: pageSection, key, parentKey, id },
      data
    } = this.props;

    return (
      <SiteContainer {...this.props}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title} | Developing Writers</title>
        </Helmet>
        {data.post.wordCount.words && (
          <ContentArea>
            <h2>{title}</h2>
            <MDXRenderer {...this.props}>{data.post.code.body}</MDXRenderer>
            {data.post.frontmatter && data.post.frontmatter.points && (
              <ExpandablePanel points={data.post.frontmatter.points} />
            )}
            <Markdown>{data.post.frontmatter.afterPoints}</Markdown>
          </ContentArea>
        )}
        {shouldShowRelatedContent(data) && (
          <RelatedContent relatedLinks={mapSiblingContent(data)} />
        )}
        {shouldShowChildLinks(data) && (
          <Navigation
            linkProperties={mapLinkProperties(data.childPages.edges)}
          />
        )}
      </SiteContainer>
    );
  }
}

export default NavigationPagesTemplate;

export const pageQuery = graphql`
  query($id: String!, $key: String!, $parentKey: String) {
    post: mdx(id: { eq: $id }) {
      id
      code {
        body
      }
      wordCount {
        words
      }
      frontmatter {
        title
        afterPoints
        points {
          point
          title
        }
      }
    }
    childPages: allMdx(filter: { frontmatter: { parentKey: { eq: $key } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            key
            parentKey
          }
        }
      }
    }
    siblingPages: allMdx(
      filter: {
        frontmatter: { parentKey: { eq: $parentKey }, key: { ne: $key } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    allMdx: allMdx {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            key
            parentKey
          }
        }
      }
    }
  }
`;
