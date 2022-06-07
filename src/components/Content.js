import React from "react";
import ImageBlock from "./ImageBlock";
import TextBlock from "./TextBlock";

const Content = ({ blocks }) => {


    return (
        <div className="content-blocks">
            {blocks?.map((block, index) => (
                <div className="content-block" key={index}>
                    {block.text ? <TextBlock block={block}/> : null }
                    {block.rgb_media ? <ImageBlock block={block}/> : null }
                </div>
            ))}
        </div>
    )
}

export default Content;
