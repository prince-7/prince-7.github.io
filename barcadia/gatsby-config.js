/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Aman Singh",
    description: "Portfolio",
    author: "Aman Singh",
    twitterUsername: "Dungeon_Mas7er",
    facebookUsername: "Am4nS1ngh",
    instagramUsername: "am4n_s1ngh",
    linkedinUsername: "aman-v-singh",
    image: "/dungeonmaster.jpg",
    siteUrl: "https://barcadia.netlify.com",
    developerName: "Aman Singh",
    developerUrl: "https://amanvsingh.me",
    pathPrefix: "/barcadia",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://amanvsingh.me",
        sitemap: "https://amanvsingh.me/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
  ],
}
