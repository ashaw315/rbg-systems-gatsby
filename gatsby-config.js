require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['article'],
  // singleTypes: ['home page'],
  // contentTypes: ['article'],
};

module.exports = {
  siteMetadata: {
    title: `rgb-systems-gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
}
