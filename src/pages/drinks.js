import React from 'react'
import { graphql, Link } from "gatsby";
import Layout from '../components/globals/layout';
import Image from 'gatsby-image';
import styled from 'styled-components';
import {setColor, media} from '../styles'
import Grid from '../components/globals/Grid'

const DrinkWrapper = styled.div`
margin: 0 auto;
 div{
  height: 15rem;
 }
 article{
  margin: 2rem 0;
  background-color:${setColor.yellow};
  padding: 1rem;
  color:${setColor.green};
 }
 ${media.tablet`
 display:grid;
 grid-template-columns: 1fr 1fr;
 column-gap: 2rem;
`}
 ${media.desktop`
 display:grid;
 grid-template-columns: 1fr 1fr 1fr;
`}
 ${media.large`
 display:grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 `
 }
`

const Drinks = ({ data }) => {
  const {allContentfulCocktail:{nodes:drinks}} = data;
  console.log(drinks)
  return (
   <Layout>
   <Grid color={setColor.hotPink}>
         <h2>
        cocktails
      </h2>
   <DrinkWrapper>


        {drinks.map((item)=> {
          console.log(item)
          return <article key={item.contentfulid}>
            <Image fluid={item.image.fluid} alt={item.name}>

            </Image>
            <h3>{item.name}</h3>
            <Link to={`/drinks/${item.slug}`}>View Recipe</Link>
          </article>
        })}
      </DrinkWrapper>
    </Grid>
  </Layout>
  )
}

export const query = graphql`
  {
    allContentfulCocktail {
      nodes {
        ingredients
         instructions{
      childMarkdownRemark{
        html
      }
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


export default Drinks;