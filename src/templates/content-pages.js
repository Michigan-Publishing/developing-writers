import React from "react";
import { Link } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/tag";
import Button from "../components/homeButton";

const Something = children => <h1>SOMETHING!</h1>;

class NavigationPagesTemplate extends React.Component {
  render() {
    const {
      pageContext: { title, section: pageSection }
    } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <MDXProvider
          components={{
            h1: Something
          }}
        >
          <MDXRenderer {...this.props} components={{ Something }}>
            {this.props.data.mdx.code.body}
          </MDXRenderer>
        </MDXProvider>
      </div>
    );
  }
}

export default NavigationPagesTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
    }
  }
`;
