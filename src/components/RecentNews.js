import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Article from "./article"
const NewsComponent = function(){
const data = useStaticQuery(graphql`
  query recentArticles {
    articles: allStrapiArticle(limit: 3) {
      edges {
        node {
          id
          Content {
            ... on STRAPI__COMPONENT_WRITING_IMAGE_BLOCK {
              strapi_component
              id
              style
              rgb_media {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                  childrenImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            ... on STRAPI__COMPONENT_WRITING_TEXT_BLOCK {
              strapi_component
              id
              text {
                data {
                  childMarkdownRemark {
                    html
                  }
                }
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
  `);
  return <div className="recent-news content-blocks">
  <h1>Recent News</h1>
    {data.articles.edges.map((e,i) => <Article key={i} node={e.node} />)}
  </div>
};

export default NewsComponent;
