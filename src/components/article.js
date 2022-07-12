import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Content from "./Content"

const ArticleComponent = ({node}) =>
    <div className='article' >
      <h1>{node.Title}</h1>
      <Content blocks={node.Content}/>
    </div>

export default ArticleComponent;
