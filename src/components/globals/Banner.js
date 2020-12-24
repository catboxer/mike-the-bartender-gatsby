import React from 'react'
import styled from 'styled-components'
import {setColor, setfadeIn, setRem, setLetterSpacing, setBorder, media} from '../../styles'

const Banner = ({title, className, text,children}) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="info">
        <p dangerouslySetInnerHTML={{__html:text}}/>
      </div>
      {children}
      </div>
  )
}
const BannerWrapper = styled(Banner)`
background: rgba(0,0,0,.7);
text-align: center;
padding: ${setRem(60)} ${setRem(32)};
${setLetterSpacing(3)};
color:${setColor.mainWhite};
h1{
  text-transform: capitalize;
  font-size: ${setRem(48)};
  color:${setColor.blue};
}
p{
  width: 85%;
  margin: 0 auto;
}
${media.tablet`width: 70vw;
  ${setBorder({width:"6px", style:"solid", color:setColor.hotPink})};
  p{
    width: 75%;
  }`}
h1{
    ${setfadeIn("100%","-10%","0")}
  }
.info{
    ${setfadeIn("-100%","10%","0")}
    }
`


export default BannerWrapper;