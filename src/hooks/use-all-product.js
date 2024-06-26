import { graphql, useStaticQuery } from "gatsby"

const useAllProduct = () => {
  const {
    allContentfulProduct: { nodes },
  } = useStaticQuery(graphql`
    query allProductLinksQuery {
      allContentfulProduct(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          gatsbyPath(filePath: "/projects/{contentfulProduct.sku}")
          introduction
          sku
          description {
            raw
          }
          headerImage {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  return nodes
}

export default useAllProduct
