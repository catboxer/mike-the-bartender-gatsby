import styled from 'styled-components'
import {setRem} from '../../styles';


const Grid = styled.section`
padding:${setRem(32)} ${setRem(48)} ${setRem(32)} ${setRem(32)};
background:${props=>props.color};
display: grid;
margin: 0 auto;
`;

export default Grid;