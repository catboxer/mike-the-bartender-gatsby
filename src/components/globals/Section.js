import styled from 'styled-components'
import {setRem} from '../../styles';


const Section = styled.section`
padding:${setRem(32)} ${setRem(48)} ${setRem(32)} ${setRem(32)};
background:${props=>props.color};
display: flex;
flex-wrap: wrap;
`;

export default Section;