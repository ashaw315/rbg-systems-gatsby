const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    
  
    // const newsArticle = path.resolve(`./src/pages/news/news-article.js`)
    return graphql(
      `
      {
                allStrapiArticle {
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
                        }
                      }
                      Date
                      Title
                    }
                  }
                }
              }
      `
    ).then(result => {
      if (result.errors) {
        throw result.errors
      }
  
const articles = result.data.allStrapiArticle.edges

// articles.forEach((article, index) => {
//     const previous = index === articles.length - 1 ? null : articles[index + 1].node
//     const next = index === 0 ? null : articles[index - 1].node

//     createPage({
//         path: article.node.id,
//         component: newsArticle,
//         context: {
//             id: article.node.id,
//             previous,
//             next,
//         },
//     })
// })

const articlesPerPage = 2;
const numPages = Math.ceil(articles.length / articlesPerPage);

        for(var i = 0; i < numPages; i++) {
            createPage({
                path: i === 0 ? `/news` : `/news/${i + 1}`, 
                component: path.resolve(`./src/templates/news.js`),
                context: {
                    limit: articlesPerPage,
                    skip: i * articlesPerPage,
                    numPages,
                    currentPage: i + 1
                },
            });
        };
    })
}


