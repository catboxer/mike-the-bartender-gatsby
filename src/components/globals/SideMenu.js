import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import styled from 'styled-components'

//import SiteInfo from './SiteInfo'
import {
    FaCocktail, FaBrain, FaTshirt, FaBook, FaHamburger, FaHome, FaInfo, FaQuestion,
} from 'react-icons/fa';


const SideMenuInner = styled.div`
width: 35px;
margin: 0 auto; 
height:100vh;
position: fixed;
z-index: 3;
top: 25vh;
right: 3px;
`


const SideLink = styled(Link)`
display: inline-flex;
align-items: center;
margin: 1rem 0;
justify-content: space-evenly;
border-radius: 25%;
color:  ${props=> typeof window !== "undefined" ? (props.to===window.location.pathname? '#05C079ff':'#F21C5Eff') : '#000'};
background-color: #F6F9B5ff;
padding: 8px;
:focus {
  cursor: pointer;
  background-color:#FDCBD2ff;
}
:hover  {
  cursor: pointer;
  background-color:#FDCBD2ff;
}
`


const SideMenu = () => {

  const pickIcon=(slug) =>{
        if (slug==='home'){
          return <FaHome />
        } else if (slug==='about'){
          return  <FaInfo/>
        }else if (slug==='blog'){
          return  <FaBook/>
        }else if (slug==='shop'){
          return <FaTshirt/>
        }else if (slug==='recipes'){
          return <FaHamburger/>
        }else if (slug==='drinks'){
          return  <FaCocktail/>
        }else if (slug==='dirty-dancing-games'){
          return  <FaBrain/>
        } else return  <FaQuestion/>
      }
  return (
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


        <SideMenuInner>  
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item=>( 
                <SideLink to={`/${item.object_slug}`} key={item.object_id}>
                      {pickIcon(item.object_slug)}
                </SideLink>    
            ))}

{/* 
            <MenuLink to={'#'} >
                 <img class="user-img-30" alt="" src="https://i.imgur.com/4FbD7mF.png"/>
            </MenuLink> */}


        </SideMenuInner>

)}/>  
  )
}

export default SideMenu;