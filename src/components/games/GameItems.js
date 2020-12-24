import React from 'react'
import {graphql,StaticQuery, Link} from 'gatsby'
import styled from 'styled-components'

const GameItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const GameItem = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  padding: 16px;
  margin: 16px;
`

const GameImage = styled.img`
  max-width: 100%;
`

const GameItems = () => {
  return (
      <StaticQuery query={graphql`
                  {
            allWordpressWpGame{
              edges{
                node{
                  id
                  title
                  excerpt
                  content
                  slug
                  featured_media{
                  source_url
                  }
                }
              }
            }
          }
      `} render={props => (
        <GameItemsWrapper>
          {props.allWordpressWpGame.edges.map(gameItem => (
            <GameItem key={gameItem.node.id}>
              <h2>{gameItem.node.title}</h2>
              <GameImage src={gameItem.node.featured_media.source_url} alt='Thumbnail' />
              <div dangerouslySetInnerHTML={{__html: gameItem.node.excerpt}} />
              <Link to={`/game/${gameItem.node.slug}`}>
                Play Game
              </Link>
            </GameItem>
          ))}
        </GameItemsWrapper>)} />
  )
}
export default GameItems;