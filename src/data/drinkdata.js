import React, {  useCallback, useState, useContext, use } from 'react'
import { graphql } from "gatsby";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
// const [loading, setLoading]= useState(true);
// const [searchTerm, setSearchTerm]= useState('a');
const [cocktail, setCocktails] = useState([])

const fetchDrinks = ({ data }) => {
  const {allContentfulCocktail:{nodes:drinks} }= data;
  console.log(drinks)
// if(drinks){
//      const newCocktails  = drinks.map((drink)=>{
//         const {
//           glass, 
//           image, 
//           ingredients, 
//           name, 
//           slug, 
//           instructions,
//           contentfulid,
//         } = drink
//         return {
//           id:contentfulid, 
//           name, 
//           image,
//           info:instructions, 
//           glass,
//           ingredients,
//           slug,
//         }
//   }) 
//   setCocktails(newCocktails)
// } else {
//     setCocktails([])
  }

// useEffect(()=>{
//   fetchDrinks()
// },[searchTerm, fetchDrinks])



  return <AppContext.Provider value={{cocktail, setSearchTerm}}>{children}</AppContext.Provider>
}
// make sure use

export const query = graphql`
  {
    allContentfulCocktail {
      totalCount
      nodes {
        ingredients
        instructions {
          instructions
        }
        contentfulid
        name
        slug
        glass
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
