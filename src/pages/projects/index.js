import React from "react";
import { graphql, Link } from "gatsby";

const ProjectIndex = ({ data }) => {
    
    console.log('all projects', data)

    return (
        <div>
            <h1>All Projects Here!</h1>
            {/* {allProjects.map(project => (
                <div key={project.node.id}></div>
            ))} */}
            {data.allStrapiProject.edges.map((edge, index) => (
                <div key={index}>
                    <Link to={`/projects/${edge.node.id}`}>
                        <h1>{edge.node.Title}</h1>
                    </Link>
                    <h4>{edge.node.Client}</h4>
                    <a href={edge.node.Url}>{edge.node.Url}</a>
                </div>
            ))}
            
        </div>
    )
}

export const query = graphql`
  {
    allStrapiProject {
      edges {
        node {
          Client
          Date
          Title
          Url
          id
        }
      }
    }
  }
`

export default ProjectIndex;