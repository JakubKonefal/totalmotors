const path = require('path')

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
)

module.exports = {
  siteMetadata: {
    title: `PageTitle`,
    description: ``,
    author: `Jakub Konefał`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 95,
          breakpoints: [500, 750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Montserrat',
              variants: ['300', '400', '500', '600', '700', '800'],
              subsets: ['latin-ext'],
            },
            {
              family: 'Fira Sans',
              variants: ['300', '400', '500', '600', '700', '800'],
              subsets: ['latin-ext'],
            },
          ],
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', '.cache', 'public'],
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `deutrtfp5rgf`,
    //     // Learn about environment variables: https://gatsby.dev/env-vars
    //     accessToken: 'pxI2o6ezoo6D4Ao9_wITL7deh-dRAe9FELfoc5NeISs',
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `PageTitle`,
    //     short_name: `PageTitle`,
    //     start_url: `/`,
    //     background_color: `#EEEEEE`,
    //     theme_color: `#B19684`,
    //     display: `standalone`,
    //     icon: `src/assets/icons/favicon.png`,
    //   },
    // },
  ],
}
