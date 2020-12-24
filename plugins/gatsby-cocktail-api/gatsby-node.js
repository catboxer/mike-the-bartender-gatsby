/**
being * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is  loaded in your site.
 *
 * See: https://www.gatsbyjs.com/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
const fetch = require('node-fetch');

exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin")
exports.sourceNodes = async (
    { actions, createContentDigest, createNodeId,}
  ) => {
  const NODE_TYPE = "CocktailRecipes";
    try{ 
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka`)
    const data = await response.json();
    const {drinks} = data;
    drinks.forEach((drink) => {
      console.log(drink.idDrink)
      actions.createNode({
        ...drink,
        
        id: createNodeId(`${NODE_TYPE}-${drink.idDrink}`),
        parent:null,
        children:[],
        internal:{
          type:NODE_TYPE,
          content:JSON.stringify(drink),
          contentDigest: createContentDigest(drink)
        }
      })
    })
    }
    catch(error){ 
      console.log(error)
      console.log("ERROR WIH DRINK DB")
    }
  }
