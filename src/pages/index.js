import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"

const IndexPage = ({ data }) => {

  return (
    <div  style={{
      backgroundColor: '#ffffff',
    }}>
    <Layout>
      <SEO title="Dango Retro" />
      {data.allWpPost.edges.map(({ node, key }) => (
        <Card key={key} node={node} />
      ))}
    </Layout>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date], order: DESC }) {
       edges {
      node {
        title
        content
        excerpt
        slug
        date(formatString: "MM-DD-YYYY")
        author {
          node {
            username
            name
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            uri
            title
          }
        }
      }
    }
    }
  }
`
