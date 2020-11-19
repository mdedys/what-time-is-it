/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-tsconfig-paths",
    "gatsby-plugin-react-helmet",
  ],
  siteMetadata: {
    title: "What time is it there?",
    description: "Quick utility to check the local time in a given city",
    url: "https://whattimeisitthere.com",
    image: "static/favicon.ico",
  },
};