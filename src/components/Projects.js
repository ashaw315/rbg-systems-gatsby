import React, { useEffect, useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {useStaticQuery, graphql, Link} from "gatsby"
import ImageBlock from "./ImageBlock";
import ProjectPreview from "./ProjectPreview";


function indexInParent(node) {
    var children = node.parentNode.childNodes;
    var num = 0;
    for (var i=0; i<children.length; i++) {
         if (children[i]==node) return num;
         if (children[i].nodeType==1) num++;
    }
    return -1;
}

const ProjectIndex = (data,filter) => {
  let totalProjects = data.allStrapiProject.edges.length;
  let recentOrSelected = !!filter;
  filter = filter ? filter : () => true;
    return (
    <div id="projects-template">
      <div id="projects-title">
        <h1>{recentOrSelected ? "Recent" : "Selected"} Projects</h1>
      </div>
      <div className="projects">
        {data.allStrapiProject.edges.filter(filter).map((edge, index) => <ProjectPreview node={edge.node} key={index}/>)}
      </div>
    </div>
    )
}

const Projects = ({filter}) => {
  const data = useStaticQuery(graphql`
    query projects {
      allStrapiProject(sort: {fields: Date, order: DESC}) {
        edges {
          node {
            tags {
              tagName
              hexValue
            }
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
    `);
    return ProjectIndex(data,filter ? filter : null);
  };

export default Projects;
