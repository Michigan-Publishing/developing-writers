import React, { Component } from "react";
import { graphql } from "gatsby";

import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { withMDXScope } from "gatsby-mdx/context";
import { Helmet } from "react-helmet";

import ContentArea from "../components/contentArea";
import Navigation from "../components/secondaryNavigation";
import SiteContainer from "../components/siteContainer";
import Point from "../components/point";
import Markdown from "../components/markdown";
import RelatedContent from "../components/relatedContent";
import Breakpoints from "../components/breakpoints";
import ExpandableBlockquote from '../components/expandableBlockquote';
import { FulcrumImageVideo, FulcrumTextAudio } from '../components/fulcrum';
import { Game1, Game2, PieChart, WordCount } from '../components/games';

// eslint-disable-next-line
import styles from "../styles/global.css";

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

class ContentPages extends Component {
  constructor(props) {
    super(props);
    this.state = { headerOffset: 0 };
  }

  componentDidMount() {
    this.setState({
      headerOffset: this.siteContainer
        ? this.siteContainer.headingWrapper.clientHeight
        : 0
    });
  }

  render() {
    const {
      pageContext: { title },
      data
    } = this.props;
    const contextComponents = { ExpandableBlockquote, FulcrumImageVideo, FulcrumTextAudio, Game1, Game2, PieChart, WordCount };
    const newScope = { ...this.props.scope, ...contextComponents};
    const newProps = {...{...this.props, ...{ scope: newScope }}};

    return (
      <Breakpoints>
        <SiteContainer
          ref={siteContainer => (this.siteContainer = siteContainer)}
          {...this.props}
        >
          <Helmet>
            <meta charSet="utf-8" />
            <title>{title} | Developing Writers</title>
          </Helmet>
          {data.post.wordCount.words && (
            <ContentArea>
              <h1>{title}</h1>
              <MDXRenderer {...newProps}>{data.post.code.body}</MDXRenderer>
              {data.post.frontmatter && data.post.frontmatter.points && (
                <Point
                  points={data.post.frontmatter.points}
                  headerOffset={this.state.headerOffset}
                />
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
      </Breakpoints>
    );
  }
}

export default withMDXScope(ContentPages);

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
