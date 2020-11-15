module.exports = {
  siteMetadata: {
    title: "Włoszczyzna",
    description: "This is pizzeria Włoszczyzna website",
    siteUrl: "https://quirky-northcutt-2862d8.netlify.app",
    image: "/img-seo.png",
    twitterUsername: "@userName",
    author: "Code",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imgs`,
        path: `${__dirname}/src/assets/imgs`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `0a42f7ca3d94f1b56d221a537436d6`,
      },
    },
  ],
}
