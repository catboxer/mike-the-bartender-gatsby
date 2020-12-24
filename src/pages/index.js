export default function(){return null};

// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
// import {graphql, StaticQuery} from 'gatsby'

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={['dirty dancing', 'drinks','bartender mike', 'recipes' ]} />
//     <h1>Hi people</h1>
// <StaticQuery query={ graphql`
// {
//     allWordpressPost{
//     edges{
//       node{
//         id
//         title
//         excerpt
//         link
//       }
//     }
//   }
// }` } render={ props => (
//   <div>
//     {props.allWordpressPost.edges.map(post=>(
//       <div key={post.node.id}>
//         <h1>
//           {post.node.title}
//         </h1>
//         <div dangerouslySetInnerHTML={{__html:post.node.excerpt}}/>
//       </div>
//     ))}
//   </div>
// )}/>
//     {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
//   </Layout>
// )

// export default IndexPage

