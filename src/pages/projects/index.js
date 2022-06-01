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
  let projectRefs = [];
  const scrollStates = useRef(new Array(totalProjects).fill(0))
  let callback = (entries, observer) => {
    let currentScrolls = scrollStates.current.slice();
    entries.forEach(entry => {
      // console.log(entry.target, entry.intersectionRatio)
      let index = indexInParent(entry.target);

      if(entry.isIntersecting){
        currentScrolls[index] = 1;
        console.log(index,"added")
      } else {
        // currentScrolls[index] = 0;//
        console.log(index,"removed")
      }
      //   if(entry.intersectionRatio > .5){
      //     if(currentScrolls[index] === 0) currentScrolls[index] = 1;
      //   } else {
      //     if(currentScrolls[index] === 1) currentScrolls[index] = 0;
      //   }
      // }
      // console.log(scrollStates)
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
    });
    if(currentScrolls !== scrollStates.current)
      scrollStates.current = currentScrolls;
    console.log("currentScrolls changed")
  };
  let options = {
    root: null,
    rootMargin: '100px',
    threshold: [1]
  }
  useEffect(()=>{
    if(typeof window !== "undefined"){
      let observer = new IntersectionObserver(callback, options);
      let targets = document.querySelectorAll('.project');
      targets.forEach(target => observer.observe(target));
    }
  },[])
    return (
      <div className="projects">
        {data.allStrapiProject.edges.map((edge, index) => <ProjectPreview scroll={scrollStates.current[index]} node={edge.node} key={index}/>)}
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
