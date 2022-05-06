import React from "react";
import { graphql, Link } from "gatsby";
import ImageBlock from "../../components/ImageBlock";
import ProjectPreview from "../../components/ProjectPreview";

const ProjectIndex = ({ data }) => {
    return (
      <div className="projects">
        {data.allStrapiProject.edges.map((edge, index) => <ProjectPreview node={edge.node} key={index}/>)}
      </div>
    )
}

export const query = graphql`
query allProjects {
  allStrapiProject {
    edges {
      node {
        id
        Slug
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
              url
            }
          }
        }
      }
    }
  }
}
`

export default ProjectIndex;
