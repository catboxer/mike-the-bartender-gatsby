import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Layout from '../components/globals/layout'
import {setColor, setFont} from '../styles'
import {SmallBtn} from '../components/globals/Buttons'

const BlogItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  
`

const BlogItem = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  padding: 16px;
  margin: 16px;
`

const BlogImage = styled.img`
  max-width: 100%;
`

const Pagination = styled.div`
display: flex;
justify-content: flex-end;
margin: 1.5rem 0;

`
const NumberWrapper = styled.div`
padding: 0 10px;
border: 1px ${setColor.green} solid;
background: ${props=> props.isCurrentPage?`${setColor.green}`:`${setColor.yellow}`};
border-radius: 5%;
`
const PageNumber = styled(Link)`
display: block;
padding: 8px 16px;
color: ${setColor.hotPink};
${setFont.slanted};
font-weight: bolder;
`

export default ({pageContext}) => {
  return (
    <Layout>
      <BlogItemsWrapper>
        {pageContext.posts.map(post=> ( 
          <BlogItem key={post.node.wordpress_id}>
          <BlogImage src={post.node.featured_media.source_url} alt={post.node.alt_text}/>
            <small>{post.node.date}</small>
            <h3 dangerouslySetInnerHTML={{__html:post.node.title}}/>
              <p dangerouslySetInnerHTML={{__html:post.node.excerpt}}/>
              <SmallBtn as="a" href={`/post/${post.node.slug}`}>Read More</SmallBtn>
          </BlogItem>
          )          
            
    )}
    </BlogItemsWrapper>
    <Pagination>
    {Array.from({length: pageContext.numberOfPages}).map((page,index)=> (
      <NumberWrapper key={index} isCurrentPage={index +1===pageContext.currentPage}>
      <PageNumber to={index===0? '/blog': `/blog/page-${index+1}`}>
        {index +1}
      </PageNumber>
      </NumberWrapper>
    ))}
    </Pagination>

    </Layout>
  )
}
