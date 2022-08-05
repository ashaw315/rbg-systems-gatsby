import React, { useEffect, useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {useStaticQuery, graphql, Link} from "gatsby"
import ImageBlock from "./ImageBlock";
import PaperPerformer from "../components/PaperPerformer";
import img from "../images/rgb-systems-3d-desk-3.png"
import Content from "../components/Content"

const Info = () => {
  const data = useStaticQuery(graphql`
    query infoPage {
      strapiPage(Title: {eq: "Info"}) {
        Slug
        Title
        Content {
          ... on STRAPI__COMPONENT_WRITING_IMAGE_BLOCK {
            id
            rgb_media {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            style
          }
          ... on STRAPI__COMPONENT_WRITING_TEXT_BLOCK {
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
        createdAt
      }
    }
    `);
    console.log("Info",data)
    return <Content blocks={data?.strapiPage?.Content}/>;
  };

export default Info;
