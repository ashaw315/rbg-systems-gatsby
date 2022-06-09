import React, { useEffect, useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby";
import Marquee from "react-fast-marquee";

const ProjectPreview = ({node,scroll}) => {
  const sideRef = useRef();
  const block = node.images;
  return (
    <div>
    <Link to={`/projects/${node.Slug}`}  className={"project" + (scroll ? " on" : "")}>
      {false && <h3>{node.Title} {node.Client && ` for ${node.Client}`}</h3>}
      <p className="project-title">{node.Url}</p>
      <div className="main-images">
        <Marquee
        className="marquee"
        speed={50}
        loop={0}
        pauseOnHover={false}
        gradientWidth={0}
        play={false}
        >
          {
            block && block.rgb_media.map((media, index) => {
            const imgUrl = media.localFile.url
            const imgData = getImage(media.localFile.childImageSharp.gatsbyImageData)
            const {width,height} = media.localFile.childImageSharp.gatsbyImageData;
            return (
                // <img key={index} className="media" src={imgUrl}></img>
                <div key={index} className="project-image-thumb-container" style={{aspectRatio: `${width} / ${height}`}}>
                  <GatsbyImage className="media" image={imgData} alt="" objectFit="contain"></GatsbyImage>
                </div>
              )
            })
          }
        </Marquee>
      </div>
    </Link>

    
        <div className="project-tags">
              {node.tags ? (
                
                  node.tags.map((tag, index) => {
                    
                    return (
                      <Link to={`/projects/tag/${tag.tagName.toLowerCase()}`} >
                        <p key={index} style={{color: tag.hexValue }}>{tag.tagName}</p>
                      </Link>
                    )
                  })
                
              ) : null }
        </div>
    </div>
  )
}

export default ProjectPreview;
