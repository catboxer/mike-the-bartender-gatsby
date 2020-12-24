import styled from 'styled-components'
import {setFlex, setBackground} from '../../styles'

const Background = styled.header`
height:50vh;
${props=> setBackground({img:props.img, color:props.color})};
${setFlex({x:'center', y:'center'})};

`;

export default Background;
