import React from "react";
import { graphql } from "gatsby";

const IndexPage = ({
  data: {
    allMdx: { edges }
  }
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.key) // You can filter your posts based on some criteria
    // we could technically just treat this as the filter too
    // doing this for example and "simplicity"
    .sort((a, b) => {
      return a.node.frontmatter.parentKey === null ? -1 : 1;
    })
    .map(k => {
      return {
        title: k.node.frontmatter.title,
        key: k.node.frontmatter.key,
        parentKey: k.node.frontmatter.parentKey
      };
    });
  // .reduce((edges, nextEdge) => {
  //   // if this is a root element
  //   if (nextEdge.parentKey === null) {
  //     edges[nextEdge.node.frontmatter.key] = {
  //       tite: nextEdge.node.fronmatter.title,
  //       key: nextEdge.node.frontmatter.key
  //     };
  //     return edges;
  //   }

  //   // figure out if this is a child element - hasParent & parent exists
  //   if (
  //     nextEdge.frontmatter.parentKey &&
  //     edges[nextEdge.node.frontmatter.parentKey]
  //   ) {
  //     edges[nextEdge.node.frontmatter.key].children.push({
  //       tite: nextEdge.node.fronmatter.title,
  //       key: nextEdge.node.frontmatter.key
  //     });
  //     return edges;
  //   }
  // }, {});

  // this is garbage - the reduce should work instead
  // also - not totally sure how to get hte link. I see a lot of
  // people have the path to the resource in frontmatter and they usually
  // add that to the query
  return (
    <div>
      {Posts.map(p =>
        p.parentKey ? (
          <div style={{ marginLeft: 10 }}>{p.title}</div>
        ) : (
          <div>{p.title}</div>
        )
      )}
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            date
            description
            key
            parentKey
          }
        }
      }
    }
  }
`;
