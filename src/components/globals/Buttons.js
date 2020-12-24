import styled from 'styled-components'
import {setTransition,setColor, setRem, setLetterSpacing, setBorder, setFont} from '../../styles'



export const PrimaryBtn = styled.button`
display:inline-block;
background:${setColor.green};
color:${setColor.yellow};
text-transform:capitalize;
font-size:${setRem(18)};
${setFont.big};
padding:${setRem(17)} ${setRem(36)};
${setBorder({color: setColor.green})};
${setLetterSpacing(3)};
${setTransition({time:".6s"})};
&:hover{
  background:transparent;
  color:${setColor.green};
}
${props => `margin: ${props.t || 0} ${props.r || 0}
${props.b || 0} ${props.l || 0}`};
text-decoration: none;
border-radius: 5%;
cursor: pointer;
`

export const SmallBtn = styled(PrimaryBtn)`
padding: ${setRem(9)} ${setRem(12)}
`;
