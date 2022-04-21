import React from "react";

const TextBlock = ({item}) => {
    console.log(item)
    const text = item.text.data.childMarkdownRemark.html
    return (
        <div dangerouslySetInnerHTML={{__html: text}}>
            
        </div>
    )
}

export default TextBlock;