import React, { useEffect, useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectPreview = ({block}) => {
const sideRef = useRef();

const scrollToSide = () => {
    sideRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
    })
};

    console.log('media', block)

    // useEffect(() => {
    //     window.setInterval(function() {
    //         var elem = document.querySelector('.main-images');
    //         elem.scrollTop += 20;
    //       }, 5000);
    // }, [])

    return (
        <div className={`media-block style-${block.style?.toLowerCase()}`} ref={sideRef}>
                {block.rgb_media.map((media, index) => {
                    
                    const imgUrl = media.localFile.url
                    const imgData = getImage(media.localFile.childImageSharp.gatsbyImageData)
                    console.log(imgUrl)
                    return (
                        <img key={index} className="media" src={imgUrl}></img>
                        // <GatsbyImage className="media" key={index} image={imgData} alt="" objectFit="contain"></GatsbyImage> 
                    )
                })}
        </div>
    )
}

export default ProjectPreview;