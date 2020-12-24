import styled from 'styled-components'
import {setFlex, setBackground} from '../../styles'

const Hero = styled.header`
height:50vh;
grid-area:main;
${props=> setBackground({img:props.img, color:props.color})};
${setFlex({x:'center', y:'center'})};
`;

export default Hero;
