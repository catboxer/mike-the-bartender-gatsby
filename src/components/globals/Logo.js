import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import styled from 'styled-components';

const LogoLink = styled(Link)`
margin:0;
padding:0;
grid-area: logo;
max-height: 100px;
display: flex;
max-width: 100px;
`
const LogoImage = styled.img`
display:inline-flex;
height: 4rem;
align-self: flex-end;

`

const Logo = () => {
  return (
   <StaticQuery query={graphql`
     {
        allWordpressWpLogo{
          edges{
            node{
              url{
                source_url
              }
            }
          }
        }
      }

`} render={props=> (
    <LogoLink to={"/"}>
      <LogoImage src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="logo"/>
    </LogoLink>
)}/>  
  )
}

      export default Logo;