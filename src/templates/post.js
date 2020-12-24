import React from 'react'
import Layout from '../components/globals/layout'
import styled from 'styled-components'

const BlogImage = styled.img`
width:600px;
border: black solid 2px;
border-radius: 10%;
`

export default ({pageContext}) => {
  return (
    <Layout>
      <BlogImage src={pageContext.featured_media.source_url} alt={pageContext.alt_text}/>
      <small>{pageContext.date}</small>
      <h1 dangerouslySetInnerHTML={{__html:pageContext.title}}/>
      <div dangerouslySetInnerHTML={{__html:pageContext.content}}/>
    </Layout>
  )
}
