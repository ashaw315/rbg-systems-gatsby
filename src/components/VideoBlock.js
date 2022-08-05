import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const fileExtensions = /jpeg|jpg|mp4|png|mov/g;

const isCaption = (content) => {
  return content && !!content.match(fileExtensions);
}

const VideoBlock = ({block}) => {
  const caption = (block.video.caption?.indexOf(".png") > -1 || block.video.caption?.indexOf(".m") > -1) ? "" : block.video.caption;
  console.log({block})
  return <div>
      <video autoPlay loop muted src={block.video.url}/>
      {caption?.length > 0 && <div className="caption">{caption}</div>}
    </div>

  return (
    block.rgb_media.map((media, index) => {
        const imgData = getImage(media.localFile.childImageSharp.gatsbyImageData)
        const caption = (media.caption?.indexOf(".png") > -1 || media.caption?.indexOf(".j") > -1) ? "" : media.caption;
        return <div>
        <GatsbyImage className="media" key={index} image={imgData} alt=""></GatsbyImage>
        {caption?.length > 0 && <div className="caption">{caption}</div>}
        </div>
    })
  )
}

export default VideoBlock;
