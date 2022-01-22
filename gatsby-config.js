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
    description: "I am a developer who also has good knowledge and practice in the field of CyberSecurity and Networking. I have Contributed to numerous OpenSource Projects and also have successfully Completed GSoC'21 with OWASP Foundation for Secure-Tea Project. I have a passion for Web-Development and Cybersecurity and also have good Knowledge of data structures and Algorithms. I have dabbled with the basics of Machine Learning. I have experience with React, Nodejs, and Python while building my projects and during Internships.",
    author: "Aman Singh",
    twitterUsername: "Dungeon_Mas7er",
    facebookUsername: "Am4nS1ngh",
    instagramUsername: "am4n_s1ngh",
    linkedinUsername: "aman-v-singh",
    githubUsername: "prince-7",
    image: "/dungeonmaster.jpg",
    siteUrl: "https://amanvsingh.me",
    developerName: "Aman Singh",
    developerUrl: "https://amanvsingh.me",
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
