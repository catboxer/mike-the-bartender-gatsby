import {createGlobalStyle} from 'styled-components';
import {setColor, setFont} from '../../styles'


const Globals =  createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Martel:wght@800&family=Montserrat:wght@900&family=Open+Sans:ital,wght@0,400;1,700&display=swap');

*{
  box-sizing: border-box;
  }
body{
  font-size: 100%;
  color:${setColor.mainBlack};
  background-color: ${setColor.blue};
  ${setFont.main};
  margin: 0 !important;
  padding: 0 !important;
}
h1{
  font-size: 3em;
  line-height: 1.2;
  margin-bottom: .5em;
  font-family: ${setFont.big};
  text-transform: uppercase;
}
h2{
  font-size: 2em;
  margin-bottom: .75em;
  font-family: ${setFont.big};
  text-transform: uppercase;
}
h3{
  font-size: 1.5em;
  line-height: 1;
  margin-bottom: 1em;
  ${setFont.slanted};
  font-weight: bold;
  text-transform: capitalize;
}
h4{
  font-size: 1.2em;
  line-height: 1.2em;
  margin-bottom: 1.25em;
  font-weight: bolder;
  font-family: ${setFont.slanted};
  text-transform: capitalize;
}
h5{
  font-size: 1em;
  margin-bottom: 1.5em;
  font-weight: bolder;
  ${setFont.slanted};
  text-transform: capitalize;
}
h6{
  font-size: 1em;
  font-weight: bolder;
  ${setFont.slanted};
  text-transform: capitalize;
}
p {
  font-size: 1em;
  line-height: 1.5;
  margin: 0 0 1.5em 0;
  ${setFont.main};
}
`
export default Globals
