module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sass",
    "gatsby-plugin-fontawesome-css",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imgs`,
        path: `${__dirname}/src/assets/imgs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logos`,
        path: `${__dirname}/src/assets/logos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/assets/data/`,
      },
    },
  ],
}
