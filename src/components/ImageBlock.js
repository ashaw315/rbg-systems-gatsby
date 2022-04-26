import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageBlock = ({block}) => {

    console.log(block)

    return (
        <div className={`media-block style-${block.style?.toLowerCase()}`}>
            {block.rgb_media.map((media, index) => {
                const imgData = getImage(media.localFile.childImageSharp.gatsbyImageData)
                return <GatsbyImage key={index} image={imgData} alt=""></GatsbyImage>
            })}
        </div>
    )
}

export default ImageBlock;