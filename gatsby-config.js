require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: 'article',
        queryParams: {
          // Populate media and relations
          // Make sure to not specify the fields key so the api always returns the updatedAt
          populate: {
            Content: {
              populate: {
                rgb_media: "*"
            },
          },
        },
      },
    },
    {
      singularName: 'project',
        queryParams: {
          // Populate media and relations
          // Make sure to not specify the fields key so the api always returns the updatedAt
          populate: {
            Content: {
              populate: {
                rgb_media: "*"
            },
          },
            images: {
              populate: {
                rgb_media: "*"
            },
          },
        },
      },
    },
    {
      singularName: 'page',
        queryParams: {
          // Populate media and relations
          // Make sure to not specify the fields key so the api always returns the updatedAt
          populate: {
            Content: {
              populate: {
                rgb_media: "*"
            },
          },
        },
      },
    }, 'header'],
  // singleTypes: ['home page'],
  // contentTypes: ['article'],
};

module.exports = {
  siteMetadata: {
    title: `rgb-systems-gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `paperscripts`,
        path: `${__dirname}/src/components/paperscripts/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-layout",
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
  ],
}
