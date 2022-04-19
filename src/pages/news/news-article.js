import * as React from "react"
import { graphql } from "gatsby"

const newsArticle = ({ data }) => {

    console.log(data)

    return (
        <div>
        <p>Individual Articles go here!</p>
        </div>
    )
}

export default newsArticle;
