/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({ fromPath: '/', toPath: '/home', redirectInBrowser: true, isPermanent: true })
  return new Promise((resolve, reject) => {

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `  {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                featured_media{
                source_url
                }
                template
                title
                content
                acf{
                  banner_text
                }
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create Page pages.
        const pageTemplate = path.resolve("./src/templates/page.js")
        const homePageTemplate = path.resolve("./src/templates/front.js")
        const gameUnderContentTemplate = path.resolve("./src/templates/gameUnderContent.js")
        const pressUnderContentTemplate = path.resolve("./src/templates/pressUnderContent.js")
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: slash(edge.node.template==='games_under_content.php'?gameUnderContentTemplate:
            edge.node.template==='press_under_content.php'?
            pressUnderContentTemplate:
            edge.node.slug==='home'?
            homePageTemplate:
            pageTemplate),
            context: edge.node,
          })
        })
      })
      // ==== END PAGES ====

      // ==== BLOG (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(`
                {
                  allWordpressPost{
                    
                      edges{node{
                        title
                        excerpt
                        content
                        slug
                        author {
                          name
                        }
                        wordpress_id
                        date(formatString:"MMM Do, YYYY HH:mm")
                        featured_media{
                          source_url
                          alt_text
                        }
                      }
                    }
                  }
                }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const posts = result.data.allWordpressPost.edges;
          const postsPerPage =2;
          const numberOfPages= Math.ceil(posts.length/postsPerPage)
          const postsTemplate = path.resolve("./src/templates/posts.js")

          Array.from({length:numberOfPages}).forEach((page,index)=>{
            createPage({
              component: slash(postsTemplate),
              path: index===0? '/blog': `/blog/page-${index+1}`,
              context:{
                posts: posts.slice(index* postsPerPage, (index*postsPerPage)+postsPerPage),
                numberOfPages,
                currentPage:index+1
              }
            })
          })
          
          const postTemplate = path.resolve("./src/templates/post.js")
          //We want to create a detailed page for each
          //post node. We'll just use the WordPress Slug for the slug.
          //The Post ID is prefixed with 'POST_'
          _.each(posts, (post)=> {
            createPage({
              path: `/post/${post.node.slug}`,
              component: slash(postTemplate),
              context: post.node,
            })
          })
        })
      })
      
    // ==== END POSTS ====
   // ==== PAGES (CONTENTFUL DRINKS) ====
      .then(() => {
        graphql(
            `{
              allContentfulCocktail {
                  nodes {
                    slug
                    }
                  }
                }`
                ).then(result => {
                if (result.errors) {
                  console.log(result.errors)
                  reject(result.errors)
                  }
                  const drinkTemplate = path.resolve("./src/templates/cocktail.js")
                  result.data.allContentfulCocktail.nodes.forEach((drink)=>{
                     createPage({
                      path: `/drinks/${drink.slug}/`,
                      component: slash(drinkTemplate),
                      context: {
                        slug:drink.slug,
                        },
                  })

                  })
                resolve()
                    })    
        
      })
    })
  }

