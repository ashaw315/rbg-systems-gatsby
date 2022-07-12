import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageBlock = ({block}) => {
    console.log('media', block)
    return (
        block.rgb_media.map((media, index) => {
            const imgData = getImage(media.localFile.childImageSharp.gatsbyImageData)
            return <GatsbyImage className="media" key={index} image={imgData} alt=""></GatsbyImage>
        })
    )
}

export default ImageBlock;
