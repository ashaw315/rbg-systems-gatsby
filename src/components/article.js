import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Content from "./Content"

const ArticleComponent = ({node,key}) =>
    <div className='article' key={key}>
      <h1>{node.Title}</h1>
      <Content blocks={node.Content}/>
    </div>

export default ArticleComponent;
