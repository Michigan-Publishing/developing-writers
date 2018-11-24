import React from "react";
import styled from "styled-components";

import { Link } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/tag";

import ContentArea from "../components/contentArea";
import Navigation from "../components/secondaryNavigation";
import SiteContainer from "../components/siteContainer";
import ExpandablePanel from "../components/expandablePanel";

import marksy from "marksy/components";

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

const compile = marksy({
  createElement: React.createElement,
  components: {}
});

const demo = `
# Some blog title

Just need to show you some code first:

<One />
`;

class NavigationPagesTemplate extends React.Component {
  render() {
    const {
      pageContext: { title, section: pageSection, key, parentKey, id },
      data
    } = this.props;

    return (
      <SiteContainer {...this.props}>
        {data.post.wordCount.words && (
          <ContentArea>
            <h2>{title}</h2>
            <MDXRenderer {...this.props}>{data.post.code.body}</MDXRenderer>
            {data.post.frontmatter && data.post.frontmatter.points && (
              <ExpandablePanel>
                {data.post.frontmatter.points.map(point => compile(point).tree)}
              </ExpandablePanel>
            )}
          </ContentArea>
        )}
        {data.childPages && data.childPages.edges.length > 0 && (
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
  query($id: String!, $key: String!) {
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
