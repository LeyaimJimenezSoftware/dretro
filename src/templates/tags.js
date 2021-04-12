import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Pagination from "../components/Pagination"

const Tags = ({ data, pageContext }) => {
  return (
    <Layout>
      <div style={{ padding: `0 1.0875rem 1.45rem` }}>
        <SEO title="Dango Retro" />
        {data.allWpPost.edges.map(({ node }, key) => (
          <Card key={key} node={node} />
        ))}
        <Pagination pageContext={pageContext} />
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($slug: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
      skip: $skip
      limit: $limit
    ) {
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
