import React from "react";
import { graphql } from "gatsby";
import Content from "../../components/Content";
import ImageBlock from "../../components/ImageBlock";

const ProjectPage = ({ data }) => {
    
    console.log("projects", data)
    const proj = data.strapiProject

    return (
        <div>
            <h1>{proj.Title}</h1>
            <h4>{proj.Client}</h4>
            <h4>{proj.Date}</h4>
            <div className="main-images">
              {proj.images ? <ImageBlock block={proj.images}/> : null }
            </div>
            <Content blocks={proj.Content}/>
        </div>
    )
}


export const query = graphql`
query singleProject($id: String) {
  strapiProject(id: {eq: $id}) {
    Client
    Date
    Title
    Url
    images {
      rgb_media {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
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
  }
}
`


export default ProjectPage;