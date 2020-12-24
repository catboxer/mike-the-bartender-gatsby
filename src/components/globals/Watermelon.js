import React from 'react'
import styled, {keyframes} from 'styled-components'
import WatermelonImg from '../../images/watermelonsm.png'
import {setRem, setColor} from '../../styles'

const bounce = keyframes`
0%{
  transform: scale(1) translateY(0)translateX(100vw)  ;
}
100%  {transform: scale(.8, 1.1) translateY(-100px)translateX(-50px) rotate(270deg); 
}
`
const WatermelonFrame = styled.div`
border-top: 10px ${setColor.hotPink} solid;
width: 100vw;
height: 100%;
max-width: 100%;
grid-area: main;
`

const WatermelonTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  font-size: ${setRem(48)};
  color:${setColor.hotPink};
  position:relative;
  z-index: 2;
  `
const FeaturedImage = styled.img`
  max-width: 200px;
  margin: 0;
  animation: ${bounce} 3s;
  animation-timing-function: cubic-bezier(0.7, 0, 0.84, 0);
  animation-direction:alternate;
  animation-iteration-count: infinite;
  position:relative;
  z-index:1;
  
`
const Watermelon = ({title}) => {
  return (
   <WatermelonFrame>
      <WatermelonTitle>{title}</WatermelonTitle> 
 <FeaturedImage src= {WatermelonImg} alt="watermelon animation"/> 

   </WatermelonFrame>
  )
}


export default Watermelon;
