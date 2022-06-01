import React from "react";
import { graphql } from "gatsby";
import Content from "../components/Content";

const Page = ({ data }) => <Content blocks={data.strapiPage.Content}/>

export const query = graphql`
query singlePage($id: String) {
  strapiPage(id: {eq: $id}) {
      Slug
      Title
      Content {
        ... on STRAPI__COMPONENT_WRITING_IMAGE_BLOCK {
          id
          rgb_media {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          style
        }
        ... on STRAPI__COMPONENT_WRITING_TEXT_BLOCK {
          id
          text {
            data {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
      createdAt
    }
}
`


export default Page;
