import React, { useEffect, useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {useStaticQuery, graphql, Link} from "gatsby"
import ImageBlock from "./ImageBlock";
import PaperPerformer from "../components/PaperPerformer";
import img from "../images/rgb-systems-3d-desk-3.png"
import Content from "../components/Content"

const Services = () => {
  const data = useStaticQuery(graphql`
    query servicesPage {
      strapiPage(Title: {eq: "Our Services"}) {
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
    return <div>
    <div id="desk" className={`pic-${1}`}>
      <img id="desk-image" src={img}></img>
        <PaperPerformer />
    </div>
    <Content blocks={data.strapiPage.Content}/>
    </div>;
  };

export default Services;
