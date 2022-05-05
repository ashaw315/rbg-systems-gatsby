import React from "react";
import { graphql, Link } from "gatsby";
import ImageBlock from "../../components/ImageBlock";
import ProjectPreview from "../../components/ProjectPreview";
import Marquee from "react-fast-marquee";




const ProjectIndex = ({ data }) => {
    
    console.log('all projects', data)

    return (
        <div className="projects">
            {/* {allProjects.map(project => (
                <div key={project.node.id}></div>
            ))} */}
            {data.allStrapiProject.edges.map((edge, index) => (
                <div className="project" key={index}>
                      <Link to={`/projects/${edge.node.Slug}`}>
                          <h1>{edge.node.Title}</h1>
                      </Link>
                      <h4>{edge.node.Client}</h4>
                      <a href={edge.node.Url}>{edge.node.Url}</a>
                    <div className="main-images">
                      <Marquee 
                      className="marquee"
                      speed={50}
                      loop={0}
                      pauseOnHover={true}
                      gradientColor={[75, 75, 240]}
                      gradientWidth={50}
                      >
                      {edge.node.images ? <ProjectPreview block={edge.node.images} /> : null }
                      </Marquee>
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