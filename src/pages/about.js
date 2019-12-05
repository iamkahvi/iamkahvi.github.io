import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogAbout extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title="about" />
                <p>Someone call the fucking cops, </p>
            </Layout>
        )
    }
}

export default BlogAbout

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`