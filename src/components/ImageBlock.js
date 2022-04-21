import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageBlock = ({item}) => {
    console.log(item)
    //map item.rgb_media in future

    const imgData = getImage(item.rgb_media[0].localFile.childImageSharp.gatsbyImageData)

    return (
        <div>
            <GatsbyImage
                image={imgData}
                alt="">
            </GatsbyImage>
        </div>
    )
}

export default ImageBlock;