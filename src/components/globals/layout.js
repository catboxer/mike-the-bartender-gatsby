/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import styled from 'styled-components'
import SideMenu from "./SideMenu"
import Globals from "./GlobalStyles"
import Logo from "./Logo"
import Navbar from "./Navbar"
import Footer from "./Footer"


const LayoutWrapper = styled.div` 
  overflow-x:hidden;
  display:grid;
  margin: 0;
  padding:0;
  grid-template-rows: auto 1fr 1fr 1fr 1fr auto;
  grid-template-areas:"logo header header header"
                      "main main main main"
                      /* "middle middle middle middle"
                      "bottom bottom bottom bottom" */
                      "footer footer footer footer";
        
`
const Main = styled.div`
  margin: 0;
  grid-area: main;
`


const Layout = ({ children }) => {
  return <>
      <Globals/>
        <LayoutWrapper> 
          <Logo/>
          <Navbar/>
          <Main>     
              {children}
          </Main>
          <Footer/>
        </LayoutWrapper>
            <SideMenu/>
    </>
}

export default Layout
