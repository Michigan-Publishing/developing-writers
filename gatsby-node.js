const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const componentWithMDXScope = require("gatsby-mdx/component-with-mdx-scope");

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

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
                  parent {
                    ... on File {
                      name
                      sourceInstanceName
                    }
                  }
                  code {
                    scope
                    body
                  }
                  fields {
                    slug
                  }
                  frontmatter {
                    key
                    parentKey
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
          reject(result.errors);
        }

        // Create pages for each markdown file.
        result.data.allMdx.edges.forEach(({ node }) => {
          const {
            id,
            fields: { slug },
            frontmatter: { templateKey, title, section, key, parentKey }
          } = node;
          const template = path.resolve(`./src/templates/${templateKey}.js`);

          createPage({
            path: `${slug}`,
            component: componentWithMDXScope(template, node.code.scope),
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              id,
              title,
              slug,
              section,
              key,
              parentKey
            }
          });
        });
      })
    );
  });
};

function buildSlug(node, frontMatterNodes) {
  if (!node.frontmatter || !frontMatterNodes) {
    return null;
  }

  let slugBody = node.frontmatter.key;
  let currentNode = frontMatterNodes[node.frontmatter.key];
  while (currentNode.parentKey) {
    slugBody = `${currentNode.parentKey}/${slugBody}`;
    currentNode = frontMatterNodes[currentNode.parentKey];
  }

  return `/pages/${slugBody}/`;
}

// builds a lookup based on key
buildFrontmatterLookup = nodes => {
  return nodes.reduce((all, nextNode) => {
    if (!nextNode.frontmatter) {
      return all;
    }

    return {
      ...all,
      [nextNode.frontmatter.key]: nextNode.frontmatter
    };
  }, {});
};

exports.onCreateNode = ({ node, boundActionCreators, getNode, getNodes }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    const nodes = getNodes();

    const frontMatterLookup = buildFrontmatterLookup(nodes);
    const slug = buildSlug(node, frontMatterLookup) || value;

    createNodeField({
      name: `slug`,
      node,
      value: slug
    });

    // const parentSlug = createNodeField({
    //   name: `parent`,
    //   node,
    //   parentSlug
    // });
  }
};
