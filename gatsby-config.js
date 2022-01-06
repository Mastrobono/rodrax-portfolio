module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "rodrax-portfolio",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-216377233-1",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
