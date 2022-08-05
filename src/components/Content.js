import React from "react";
import ImageBlock from "./ImageBlock";
import TextBlock from "./TextBlock";
import VideoBlock from "./VideoBlock";

const Content = ({ blocks }) => {
  console.log(blocks)
  return (
    <div className="content-blocks">
      {blocks?.map((block, index) => (
        <div key={index} className={`content-block ${block.strapi_component?.replace("writing.","")}`} key={index}>
          {block.text ? <TextBlock block={block}/> : null }
          {block.rgb_media ? <ImageBlock block={block}/> : null }
          {block.video ? <VideoBlock block={block}/> : null }
          {block.content ? <div className={block.content.indexOf("youtube.com") > -1 ? "youtube" : ""} dangerouslySetInnerHTML={{__html: block.content}}></div> : null}
        </div>
      ))}
    </div>
  )
}

export default Content;
