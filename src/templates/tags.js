import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Pagination from "../components/Pagination"
import CardView from "../components/CardView"

const AllTagsData = ({ data, pageContext }) => {
  return (
    <>
      <SEO title="Dango Retro" />
      {data.allWpPost.edges.map(({ node }, key) => (
        <Card key={key} node={node} />
      ))}
      <Pagination pageContext={pageContext} />
    </>
  )
}

const Tags = ({ data, pageContext }) => {
  return (
    <CardView allPost={<AllTagsData data={data} pageContext={pageContext} />} />
  )
}

export default Tags

export const pageQuery = graphql`
  query($slug: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      filter: { tags: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
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
          tags {
            nodes {
              slug
              name
              uri
            }
          }
        }
      }
    }
  }
`
