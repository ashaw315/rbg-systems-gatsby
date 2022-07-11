import React from "react";
import { graphql } from "gatsby";
import ProjectPreview from "../../../components/ProjectPreview";


const TagPage = ({data}) => {

    console.log("filter data", data)

    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className="projects-tags">
            <div className="project-tags-info">
                <h1>{capitalize(data.strapiTag.tagName)}</h1>
                <h2>{data.strapiTag.description}</h2>
            </div>
            <div className="projects">
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
      Url
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
    description
  }
}
  `
