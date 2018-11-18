const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
        query {
          allMdx {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  templateKey
                  title
                }
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(JSON.stringify(result.errors));
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.allMdx.edges.forEach(({ node }) => {
          console.log('NODE\n', JSON.stringify(node));
          const { 
            id,
            fields: {
              slug
            },
            frontmatter: {
              templateKey,
              title
            }
          } = node;
          const template = path.resolve(`src/templates/${templateKey}.js`)
          console.log(`Creating page ${title} with template ${templateKey}`);
          console.log('TEMPLATE', template);
          
          createPage({
            path: `${slug}-1`,
            component: template,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              id,
              title,
              slug,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    console.log('SLUG VALUE: ', value)
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}