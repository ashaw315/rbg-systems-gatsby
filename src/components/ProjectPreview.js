import React, { useEffect, useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby";
import Marquee from "react-fast-marquee";

const ProjectPreview = ({node}) => {
  const sideRef = useRef();
  const block = node.images;
  console.log(block)
  return (
    <Link to={`/projects/${node.Slug}`}  className="project">
      <h3>{node.Title} {node.Client && ` for ${node.Client}`}</h3>
      <p>{node.Url}</p>
      <div className="main-images">
        <Marquee
        className="marquee"
        speed={50}
        loop={0}
        pauseOnHover={true}
        gradientWidth={0}
        >
          {
            block && block.rgb_media.map((media, index) => {
            const imgUrl = media.localFile.url
            const imgData = getImage(media.localFile.childImageSharp.gatsbyImageData)
            const {width,height} = media.localFile.childImageSharp.gatsbyImageData;
            console.log(width,height)
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
  )
}

export default ProjectPreview;