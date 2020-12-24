import React from 'react'
import Layout from '../components/globals/layout';
import styled from 'styled-components';

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
`

export default ({pageContext}) => (
  <Layout>
    <h1>
      {pageContext.title}
    </h1>
<strong>Website url:</strong>
<div>
<a href={pageContext.acf.fav_url} target="_blank" rel="noopener noreferrer">{pageContext.acf.fav_url}</a>
</div>
      <div>
        <FeaturedImage src={pageContext.featured_media.source_url} />
      </div>
    <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
  </Layout>
);