import React from "react";
import { graphql } from "gatsby";
import ProjectPreview from "../../../components/ProjectPreview";


const TagPage = ({data}) => {

    console.log("filter data", data)

    return (
        <div className="projects-tags">
            {data.allStrapiProject.edges.map((edge, index) => <ProjectPreview node={edge.node} key={index}/>)}
      </div>
    )
}

export default TagPage;

export const query = graphql`
    query tagFilter($tag: String) {
      allStrapiProject(filter: {tags: {elemMatch: {tagName: {eq: $tag}}}}) {
        edges {
          node {
            tags {
              tagName
            }
            Title
          }
        }
      }
    }
  `
