//Pink Band Across Top import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import {setColor, setFont} from '../../styles'
const TopBanner = styled.h3`
background:  ${setColor.green};
color:${setColor.mainWhite};
text-align: center;
padding: .3rem;
font-size: 1rem;
line-height: 1.5;
${setFont.main};
margin-top:0;
grid-area: header;
`


const Header = () => {
  return (
      <TopBanner>Mike's Dirty Dancing Blog, Fansite, Store, Games & Recipes</TopBanner>
  )}


export default Header
