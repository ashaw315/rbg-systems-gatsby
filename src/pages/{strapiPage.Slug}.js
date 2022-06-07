import React from "react";
import { graphql } from "gatsby";
import Content from "../components/Content";
import PaperPerformer from "../components/PaperPerformer";
import img from "../images/rgb-systems-3d-desk-3.png"
import butthead from "../images/beavis.png"
const Page = ({ data }) => <div>
<div id="desk" className={`pic-${1}`}>
  <img id="desk-image" src={img}></img>
    <PaperPerformer />
</div>
<Content blocks={data.strapiPage.Content}/>
</div>

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
