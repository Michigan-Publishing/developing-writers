import React from "react"
import { graphql, Link } from "gatsby"

class NavigationPagesTemplate extends React.Component {
  render() {
    const { 
      data: {
        allMdx: {
          edges
        }
      },
      pageContext: {
        title,
        section: pageSection
      }
    } = this.props;
    
    return (
      <div>
        <h1>{title}</h1>
        {
          edges
            .reduce((links, edge) => {

              const { node: {
                id,
                fields: {
                  slug
                },
                frontmatter: {
                  title,
                  section
                }
              } } = edge;
              
              if(section === pageSection ) {
                links.push(
                  <div key={id}>
                    <Link to={`${slug}-1`} title={title}>{title}</Link>
                  </div>
                );
              }

              return links;
            }, [])
        }
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
          id
          fields {
            slug
          }
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
