import React, {useState,useEffect,useRef} from "react";
import { graphql, Link } from "gatsby";
import ImageBlock from "../../components/ImageBlock";
import ProjectPreview from "../../components/ProjectPreview";

function indexInParent(node) {
    var children = node.parentNode.childNodes;
    var num = 0;
    for (var i=0; i<children.length; i++) {
         if (children[i]==node) return num;
         if (children[i].nodeType==1) num++;
    }
    return -1;
}

const ProjectIndex = ({ data }) => {
  let totalProjects = data.allStrapiProject.edges.length;

    return (
    <div id="projects-template">
      <div id="projects-title">
        <h1>Selected Projects</h1>
      </div>
      <div className="projects">
        {data.allStrapiProject.edges.map((edge, index) => <ProjectPreview node={edge.node} key={index}/>)}
      </div>
    </div>
    )
}

export const query = graphql`
query allProjects {
  allStrapiProject(sort: {fields: Date, order: DESC}) {
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
