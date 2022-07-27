import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Content from "./Content"

const ArticleComponent = ({node}) =>
    <div className='article' >
    {console.log(node)}
      <h3>{new Date(node.Date).toLocaleDateString('en-US',{month: "long"})} {node.Date.slice(0,4)}</h3>
      <h2>{node.Title}</h2>
      <Content blocks={node.Content}/>
    </div>

export default ArticleComponent;
