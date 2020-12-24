import React from 'react'
import GameItems from '../components/games/GameItems';
import Layout from '../components/globals/layout';
export default ({pageContext}) => {
  return (
    <Layout>
     <h1 dangerouslySetInnerHTML={{__html:pageContext.title}}/>
      <div dangerouslySetInnerHTML={{__html:pageContext.content}}/>
      <GameItems/>
    </Layout>
  )
}
