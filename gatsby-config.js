module.exports = {
  plugins: [
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: [".mdx", ".md"]
      }
    },
    'gatsby-plugin-netlify-cms'
  ]
}
