import React from "react";

class BlogPostTemplate extends React.Component {
  render() {
    console.log("PROPS", this.props);

    return (
      <div>
        <h1>TITLE!</h1>
        <div>BLOG!</div>
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            templateKey
          }
        }
      }
    }
  }
`;
