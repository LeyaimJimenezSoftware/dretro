import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Pagination from "../components/Pagination"

const Blog = ({ data, pageContext }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <Layout>
        <div style={{ padding: `0 1.0875rem 1.45rem` }}>
          <SEO title="Dango Retro" />
          {data.allWpPost.edges.map(({ node }, key) => (
            <Card key={key} node={node} />
          ))}
          <Pagination pageContext={pageContext} />
        </div>
      </Layout>
    </div>
  )
}

export default Blog

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          uri
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
              uri
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
