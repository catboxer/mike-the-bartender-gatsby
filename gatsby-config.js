require("dotenv").config({
  path:`.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Dirty Dancing Fan Site`,
    description: `Mike has been the bartender at Mountain Lodge for years. He's amassed so much content including photos, videos and so many stories.`,
    author: `@MikeTheBartender`,
    website:'@thethisthat'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    require.resolve(
      `${__dirname}/plugins/gatsby-cocktail-api`,
    ),
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        minimizeDeprecationNotice: true,
        baseUrl: "mike.local",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        // Include specific ACF Option Pages that have a set post ID
        // Regardless if an ID is set, the default options route will still be retrieved
        // Must be using V3 of ACF to REST to include these routes
        // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
        // routes with the ID option_page_1 and option_page_2
        // Dashes in IDs will be converted to underscores for use in GraphQL
        acfOptionPageIds: [],
        auth: {
          // If auth.user and auth.pass are filled, then the source plugin will be allowed
          // to access endpoints that are protected with .htaccess.
          htaccess_user: "your-htaccess-username",
          htaccess_pass: "your-htaccess-password",
          htaccess_sendImmediately: false,

          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
          // If two-factor authentication is enabled then you need to create an Application-Specific Password,
          // see https://en.support.wordpress.com/security/two-step-authentication/#application-specific-passwords
          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: "54793",
          wpcom_user: "gatsbyjswpexample@gmail.com",
          wpcom_pass: process.env.WORDPRESS_PASSWORD,

          // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
          // plugin, you can specify user and password to obtain access token and use authenticated requests against wordpress REST API.
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
        },
        verboseOutput: false,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        searchAndReplaceContentUrls: {
          sourceUrl: "https://source-url.com",
          replacementUrl: "https://replacement-url.com",
        },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
              // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        includedRoutes: [
          "**/*/*/categories",
          "**/*/*/posts",
          "**/*/*/pages",
          "**/*/*/media",
          "**/*/*/tags",
          "**/*/*/taxonomies",
          "**/*/*/users",
          "**/*/*/menus",
          "**/*/*/game",
          "/*/*/logo",
          "/*/*/favicon",
          "/*/*/press",
        ],
      // Blacklisted routes using glob patterns
        excludedRoutes: [],
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
  ],
}
