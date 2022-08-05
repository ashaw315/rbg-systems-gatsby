import React from "react";

const TextBlock = ({block}) => {
    const text = block.text.data.childMarkdownRemark.html
    return (
        <div className="text-block" dangerouslySetInnerHTML={{__html: text}}>

        </div>
    )
}

export default TextBlock;
