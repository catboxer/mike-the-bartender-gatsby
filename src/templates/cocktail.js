import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/globals/layout"
import Image from "gatsby-image"
import styled from "styled-components"
import {setColor, setRem, setLetterSpacing} from '../styles'
import Section from "../components/globals/Section"


const CocktailWrapper = styled.div`
 margin: 2rem 0;
 h1{
  text-transform: capitalize;
  font-size: ${setRem(32)};
  color:${setColor.blue};
 }
  div{
  height: 25rem;
 }
 article{
  width:85vw;
  background-color:${setColor.orange};
  ${setLetterSpacing(3)};
  padding: 1rem;
  color:${setColor.blue};
 }
 `

const ComponentName = ({ 
  data:{
    drink:{
      name,
      glass,
      ingredients,
      image:{fluid},
      instructions: {childMarkdownRemark:{html}},
    },
  }, 
}) => {
  return (
  <Layout>
    <Section color={setColor.green}>
        <div>
          <Link to="/drinks">Back To Drinks</Link>
          <h1>Single Cocktail: {name}</h1>
        </div>
        <CocktailWrapper>
          <article>
            <Image fluid={fluid} alt={name}/>
            <h1>{name}</h1>
            <h3>{glass}</h3>
            <ul>
            {ingredients.map((ingredient,index)=>{
              return <li key={index}>{ingredient}</li>
            })}
            </ul>
            
          </article>
          <article dangerouslySetInnerHTML={{__html:html}}/>
          </CocktailWrapper>
        </Section>
  </Layout>
  ) 
}





export const query = graphql`
query GetSingleDrink($slug:String)
  {
    drink: contentfulCocktail(slug: {eq: $slug}) {
      contentful_id
      id
      name
      slug
      glass
      ingredients
      instructions{
      childMarkdownRemark{
        html
      }
    }
      image {
        fluid {
            ...GatsbyContentfulFluid
          }
      }
    }
  }
`

export default ComponentName