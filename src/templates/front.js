import React from 'react'
import Layout from '../components/globals/layout'
// import Hero from '../components/globals/Hero'
// import Banner from '../components/globals/Banner'
import Section from '../components/globals/Section'
// import {PrimaryBtn} from '../components/globals/Buttons'
import {setColor} from '../styles'
import Watermelon from '../components/globals/Watermelon'
import Background from '../components/globals/Background';

export default ({pageContext}) => {
  return (
    <>

    <Layout>
    <Background>
    <Watermelon title={pageContext.title}/>
       {/* <Hero>
        <Banner  text={pageContext.acf.banner_text}>
          <PrimaryBtn as="a" href="#" t="1.5rem">Read More</PrimaryBtn>
        </Banner>
      
       </Hero> */}
      </Background>

      <Section color={setColor.hotPink}>
        <div dangerouslySetInnerHTML={{__html:pageContext.content}}/>
      </Section>
    </Layout>
  
    </>
  )
}
