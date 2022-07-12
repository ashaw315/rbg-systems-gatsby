import React, {useState} from "react";
import { graphql } from "gatsby";
import Content from "../../components/Content";
import ImageBlock from "../../components/ImageBlock";
const ProjectPage = ({ data }) => {
    const proj = data.strapiProject
    const [viewImages,setViewImages] = useState(false);
    return (
        <div className="project">
            <h1>{proj.Title}</h1>
            {false && <h4>{proj.Client}</h4>}
            <h4>{proj.Date}</h4>
            <div className="project-content">
              <Content blocks={proj.Content}/>
            </div>
            <div id="see-more-images" className={viewImages ? "active" : ""} onClick={() => setViewImages(!viewImages)}>
              <h2 class="see-more">See more images...</h2>
              <div className={`main-images`}>
                {proj.images ? <ImageBlock block={proj.images}/> : null }
              </div>
            </div>
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
        strapi_component
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
        strapi_component
        text {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      ... on STRAPI__COMPONENT_WRITING_VIDEO_BLOCK {
        id
        strapi_component
        video {
          previewUrl
          url
        }
      }
    }
  }
}
`


export default ProjectPage;
