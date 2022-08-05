import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const fileExtensions = /jpeg|jpg|mp4|png/g;

const isCaption = (content) => {
  return content && !!content.match(fileExtensions);
}

const ImageBlock = ({block}) => {
  console.log('media', block)
  return (
    block.rgb_media.map((media, index) => {
        const imgData = getImage(media.localFile.childImageSharp.gatsbyImageData)
        const caption = (media.caption?.indexOf(".png") > -1 || media.caption?.indexOf(".j") > -1) ? "" : media.caption;
        return <div key={index}>
        <GatsbyImage className="media" key={0} image={imgData} alt=""></GatsbyImage>
        {caption?.length > 0 && <div key={1} className="caption">{caption}</div>}
        </div>
    })
  )
}

export default ImageBlock;
