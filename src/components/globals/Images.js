import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Image from 'gatsby-image';


const getImages = graphql`
{
  watermelon: file(relativePath: {eq: "watermelon.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}
`

function Images() {
  const data = useStaticQuery(getImages);
  console.log(data)
  return (
    <Image fluid={data.watermelon.childImageSharp.fluid}/>
  )
}

export default Images
