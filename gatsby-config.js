require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['article','header', 'project'],
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
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
  ],
}
