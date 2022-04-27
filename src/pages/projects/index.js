import React from "react";
import { graphql, Link } from "gatsby";
import Content from "../../components/Content";
import ImageBlock from "../../components/ImageBlock";
import { GatsbyImage, getImage } from "gatsby-plugin-image"




const ProjectIndex = ({ data }) => {
    
    console.log('all projects', data)

    return (
        <div>
            {/* {allProjects.map(project => (
                <div key={project.node.id}></div>
            ))} */}
            {data.allStrapiProject.edges.map((edge, index) => (
                <div className="projects" key={index}>
                      <Link to={`/projects/${edge.node.Slug}`}>
                          <h1>{edge.node.Title}</h1>
                      </Link>
                      <h4>{edge.node.Client}</h4>
                      <a href={edge.node.Url}>{edge.node.Url}</a>
                    <div className="main-images">
                      {edge.node.images ? <ImageBlock block={edge.node.images} /> : null }
                    </div>
                </div>
            ))}  
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
            }
          }
        }
      }
    }
  }
}
`

export default ProjectIndex;