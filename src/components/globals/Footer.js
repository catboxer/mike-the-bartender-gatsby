import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import styled from 'styled-components'
import {setColor} from '../../styles'


const FooterWrapper = styled.footer`
height:20vh;
grid-area:footer;
`;
const FooterLink = styled(Link)`
display: inline-block;
flex-wrap: wrap;
text-decoration: none;
padding: .25rem .5rem;

/* color:  ${props=> props.to===window.location.pathname? '#05C079ff':'#F21C5Eff'}; */
color: '#F21C5Eff';
:focus {
  cursor: pointer;
  color:${setColor.orange};
}
:hover  {
  cursor: pointer;
  color:${setColor.orange};
}
`
const Footer = () => (
<StaticQuery query={graphql`
      {
        allWordpressWpApiMenusMenusItems(filter:{
          name: {
            eq:"Footer Menu"
          }
        }){
          edges{
            node{
              name
              items{
                title
                object_slug
                object_id
              }
            }
          }
        }
      }

`} render={props=> (


        <FooterWrapper>  
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item=>( 
                <FooterLink to={`/${item.object_slug}`} key={item.object_id}>
                    {item.title}
                </FooterLink>    
            ))}
            <FooterLink to={"/drinks"}>Drinks</FooterLink>
            <FooterLink to={"/trivia"}>Trivia</FooterLink>
            <FooterLink to={"https://www.thethisthat.com"}>Built By Granny Coder</FooterLink>
            
          
        </FooterWrapper>

    )}/>  
)

export default Footer
