import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import styled from 'styled-components'
import {setFont, setColor} from '../../styles'
//import SiteInfo from './SiteInfo'


const NavbarMenu = styled.div`
grid-area: header;
align-self: center;
justify-self: right;
padding: 0 .5em 0 1em;
text-align:right;
${setFont.main}
font-weight: bold;
`
const NavLink = styled(Link)`
display: inline-block;
flex-wrap: wrap;
text-decoration: none;
padding: .25rem .5rem;
color:  ${props=> typeof window !== "undefined" ? (props.to===window.location.pathname? '#05C079ff':'#F21C5Eff') : '#000'};
:focus {
  cursor: pointer;
  color:${setColor.orange};
}
:hover  {
  cursor: pointer;
  color:${setColor.orange};
}
`


const Navbar = () => (
<StaticQuery query={graphql`
      {
        allWordpressWpApiMenusMenusItems(filter:{
          name: {
            eq:"Main Menu"
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


        <NavbarMenu>  
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item=>( 
                <NavLink to={`/${item.object_slug}`} key={item.object_id}>
                    {item.title}
                </NavLink>    
            ))}
            <NavLink to={"https://www.etsy.com/shop/mikethebartender"}>Etsy Store</NavLink>
            <NavLink to={"/drinks"}>Drinks</NavLink>
            <NavLink to={"/trivia"}>Trivia</NavLink>
          
        </NavbarMenu>

    )}/>  
)
export default Navbar;