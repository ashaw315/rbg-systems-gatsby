import * as React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ReactMarkdown from 'react-markdown'

const articleIndex = ({ data, pageContext }) => {

    
    console.log(data)

    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();

    return (
        <div id='content'>
            {data.allStrapiArticle.edges.map((edge, index) => (
              <div className='article' key={index}>
                <h1>{edge.node.Title}</h1>
                <div>
                  {edge.node.Content.map((item, index) => (
                    <div key={index}>
                      <ReactMarkdown children={item.internal.content}/>
                      {/* <p>{item.internal.content}</p> */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        <p>Articles go here!</p>
        {!isFirst && (
          <Link to={`/news/${prevPage}`}> Previous Page</Link>
        )}
        {!isLast && (
          <Link to={`/news/${nextPage}`}>Next Page </Link>
        )}
        </div>
    )
}

export const query = graphql`
  query articles ($limit: Int, $skip: Int){
  allStrapiArticle(limit: $limit, skip: $skip) {
    edges {
      node {
        id
        Content {
          ... on STRAPI__COMPONENT_WRITING_IMAGE_BLOCK {
            id
            internal {
              content
            }
          }
          ... on STRAPI__COMPONENT_WRITING_TEXT_BLOCK {
            id
            internal {
              content
            }
          }
        }
        Date
        Title
      }
      next {
        Date
        Title
        id
      }
      previous {
        Title
        Date
        id
      }
    }
  }
}

`

export default articleIndex;
