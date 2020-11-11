require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Pathfinder Designs`,
    description: `We raise your business to a better online presence.`,
    author: `@rodrigorocha`,
    siteUrl: `https://pathfinderdesigns.pt`,
    image: `https://firebasestorage.googleapis.com/v0/b/pathfinder-designs.appspot.com/o/social%2Fshare.jpg?alt=media&token=ec6df2de-a7d8-46fa-aaf8-9f366a0d4525`,
    url: `https://pathfinderdesigns.pt`,
    keywords: `Websites, Apps, Web Development, Graphic Design, UI/UX, Digital Marketing, SEO, Performance, Fast, Accessibility`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/content/services`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `metodology`,
        path: `${__dirname}/content/metodology`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: ['400', '700']
          },
          {
            family: `Merienda`,
            variants: [`700`]
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pathfinder Designs`,
        short_name: `pathfinder-designs`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffc95e`,
        display: `minimal-ui`,
        icon: `static/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-preact`,
    // `gatsby-plugin-offline`,
  ],
}
