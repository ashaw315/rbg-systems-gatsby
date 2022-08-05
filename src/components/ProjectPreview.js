import React, { useEffect, useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby";
import Marquee from "react-fast-marquee";

const ProjectPreview = ({node,scroll}) => {
  const sideRef = useRef();
  const block = node.images;
  console.log(node)
  return (
    <div className="project-preview">
    <Link to={`/projects/${node.Slug}`}  className={"project" + (scroll ? " on" : "")}>
      <div className="project-title"><div>{node.Url.replace("http://","").replace("https://","")}</div> <div style={{color:"blue"}}>{node.Date.slice(0,4)}</div></div>
      <div className="main-images">
        <Marquee
        className="marquee"
        speed={150}
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
                      <Link key={index}
                      style={{
                        background: tag.hexValue,
                      }}
                      className="project-tag"
                      to={`/projects/tag/${tag.tagName.toLowerCase()}`} >
                        {tag.tagName}
                      </Link>
                    )
                  })
              ) : (null) }
        </div>
    </div>
  )
}

export default ProjectPreview;
