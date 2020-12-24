import React from 'react'
import {graphql,StaticQuery, Link} from 'gatsby'
import styled from 'styled-components'

const PressItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const PressItem = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  padding: 16px;
  margin: 16px;
`

const PressImage = styled.img`
  max-width: 100%;
`

const PressItems = () => {
  return (
      <StaticQuery query={graphql`
                  {
          allWordpressWpPress {
            edges {
              node {
                id
                slug
                status
                featured_media{
                source_url
                }
                template
                title
                excerpt
                template
                acf{
                  fav_url
                }
              }
            }
          }
        }
      `} render={props => (
        <PressItemsWrapper>
          {props.allWordpressWpPress.edges.map(pressItem => (
            <PressItem key={pressItem.node.id}>
              <h2 dangerouslySetInnerHTML={{__html: pressItem.node.title}} />
              <PressImage src={pressItem.node.featured_media.source_url} alt="Thumbnail" />
              <div></div>

              <Link to={pressItem.node.acf.fav_url}>
                Read Article
              </Link>
            </PressItem>
          ))}
        </PressItemsWrapper>
        )} />
  )
}
export default PressItems;