import React from 'react'
import PressItems from '../components/press/PressItems';
import Layout from '../components/globals/layout';
import Hero from '../components/globals/Hero';
import Banner from '../components/globals/Banner'
export default ({pageContext}) => {
  return (
    <>
      <Hero img={pageContext.featured_media.source_url}>
     <Banner title={pageContext.title} text={pageContext.excerpt}/>
  </Hero>
    <Layout>
     <h1 dangerouslySetInnerHTML={{__html:pageContext.title}}/>
      <div dangerouslySetInnerHTML={{__html:pageContext.content}}/>
      <PressItems/>
    </Layout>
    </>
  )
}