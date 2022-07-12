import React from "react";
import ImageBlock from "./ImageBlock";
import TextBlock from "./TextBlock";

const Content = ({ blocks }) => {
  console.log(blocks)
  return (
    <div className="content-blocks">
      {blocks?.map((block, index) => (
        <div className={`content-block ${block.strapi_component.replace("writing.","")}`} key={index}>
          {block.text ? <TextBlock block={block}/> : null }
          {block.rgb_media ? <ImageBlock block={block}/> : null }
          {block.video ? <video autoPlay muted src={block.video.url}/> : null }
        </div>
      ))}
    </div>
  )
}

export default Content;
