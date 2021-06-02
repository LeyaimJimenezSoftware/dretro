import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import Card from "../components/Card"
import Pagination from "../components/Pagination"
import CardView from "../components/CardView"

const AppPostData = ({ data, pageContext }) => {
  return (
    <>
      <SEO title="Dango Retro" />
      {data.allWpPost.edges.length !== 0 ? (
        <div>
          {data.allWpPost.edges.map(({ node }, key) => (
            <Card key={key} node={node} />
          ))}
          <Pagination pageContext={pageContext} />
        </div>
      ) : (
        <div>No hay blogs disponibles</div>
      )}
    </>
  )
}

const Category = ({ data, pageContext, location }) => {
  console.log('p-', location)
  return (
    <CardView allPost={<AppPostData data={data} pageContext={pageContext} />} />
  )
}

export default Category

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
