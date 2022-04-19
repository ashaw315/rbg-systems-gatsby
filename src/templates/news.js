import * as React from "react"
import { graphql } from "gatsby"

const articleIndex = ({ data }) => {

    console.log(data)

    console.log(data)

    return (
        <div>
        <p>Articles go here!</p>
        </div>
    )
}

export const query = graphql`
  query articles ($limit: Int, $skip: Int){
  allStrapiArticle(limit: $limit, skip: $skip) {
    edges {
      node {
        id
        Content {
          ... on STRAPI__COMPONENT_WRITING_IMAGE_BLOCK {
            id
            internal {
              content
            }
          }
          ... on STRAPI__COMPONENT_WRITING_TEXT_BLOCK {
            id
          }
        }
        Date
        Title
      }
    }
  }
}

`

export default articleIndex;
