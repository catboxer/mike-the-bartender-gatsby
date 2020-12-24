import React from 'react'
import Layout from '../components/globals/layout'
import Hero from '../components/globals/Hero'
// import Banner from '../components/globals/Banner'
import Section from '../components/globals/Section'
// import {PrimaryBtn} from '../components/globals/Buttons'
import {setColor} from '../styles'

export default ({pageContext}) => {
  return (
<>
  <Hero>
      <Layout>
      <Section color={setColor.green}>
      <div dangerouslySetInnerHTML={{__html:pageContext.content}}/>
      </Section>
    </Layout>
  </Hero>
</>
  )
}
//  <Banner title={pageContext.title} text={pageContext.acf.banner_text}>
//      <PrimaryBtn as="a" href="#" t="1.5rem">Read More</PrimaryBtn>
//      </Banner>
//img={pageContext.featured_media.source_url}
