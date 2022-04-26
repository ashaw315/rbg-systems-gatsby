import React from "react";
import { graphql } from "gatsby";
import Content from "../components/Content";

const Page = ({ data }) => {
    
console.log(data)

    return (
        <div>
           <h1>{data.strapiPage.Title}</h1>
           <Content blocks={data.strapiPage.Content}/>
        </div>
    )
}

export const query = graphql`
  {
    strapiPage {
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