import React from "react"
import { graphql } from "gatsby"

class NavigationPagesTemplate extends React.Component {
  render() {
    console.log('PROPS', this.props);
    
    return (
      <div>
        <h1>TITLE!</h1>
        <div>HTML!</div>
      </div>
    )
  }
}

export default NavigationPagesTemplate

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            templateKey
            section
          }
        }
      }
    }
  }
`
