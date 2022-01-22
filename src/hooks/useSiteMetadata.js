import { useStaticQuery, graphql } from "gatsby"

export const UseSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            twitterUsername
            siteUrl
            developerName
            developerUrl
            twitterUsername
            facebookUsername
            instagramUsername
            linkedinUsername
            githubUsername
          }
        }
      }
    `
  )

  return site.siteMetadata
}
