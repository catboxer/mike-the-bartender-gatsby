import React from "react"
 import { Link } from "gatsby"
import Layout from "../components/globals/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>You're a bit lost</h1>
    <p>Time to catch a ride <Link to="/">Home</Link>.</p>
      <br />
  </Layout>
)

export default NotFoundPage
