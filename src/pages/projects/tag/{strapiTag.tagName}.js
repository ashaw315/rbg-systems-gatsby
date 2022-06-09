import React from "react";
import { graphql } from "gatsby";
import ProjectPreview from "../../../components/ProjectPreview";


const TagPage = ({data}) => {

    console.log("filter data", data)

    return (
        <div className="projects-tags">
            <div>
              {data.strapiTag?.projects.map((project, index) => <ProjectPreview node={project} key={index}/>)}
            </div>
          
            {/* {data.allStrapiTag.edges.map((edge, index) => <ProjectPreview node={edge.node} key={index}/>)} */}
      </div>
    )
}

export default TagPage;

export const query = graphql`
query filterTag2($id: String) {
  strapiTag(id: {eq: $id}) {
    projects {
      Title
      Client
      Date
      Slug
      images {
        rgb_media {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    tagName
    hexValue
  }
}
  `
