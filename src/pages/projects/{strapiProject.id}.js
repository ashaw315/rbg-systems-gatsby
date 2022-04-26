import React from "react";
import { graphql } from "gatsby";
import Content from "../../components/Content";

const ProjectPage = ({ data }) => {
    
    console.log("projects", data)
    const proj = data.strapiProject

    return (
        <div>
            <h1>Individual Project Here!</h1>
            <h1>{proj.Title}</h1>
            <h4>{proj.Client}</h4>
            <h4>{proj.Date}</h4>
            <Content blocks={proj.Content}/>
        </div>
    )
}


export const query = graphql`
query singleProject($id: String) {
  strapiProject(id: {eq: $id}) {
    Client
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
    Date
    Title
    Url
  }
}
`


export default ProjectPage;