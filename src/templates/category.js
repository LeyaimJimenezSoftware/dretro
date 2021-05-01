import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import MoreOptions from "../components/MoreOptions"
import SEO from "../components/seo"
import Card from "../components/Card"
import Pagination from "../components/Pagination"
import { COLORS } from "../constants/colors"

const Category = ({ data, pageContext }) => {
  return (
    <div style={{backgroundColor: COLORS.WHITE}}>
    <Layout>
      <MainDiv>
        <div
          style={{
            padding: `0 1.0875rem 1.45rem`,
            margin: "0px 15px 5px 15px",
            boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
          }}
        >
          <SEO title="Dango Retro" />
          {data.allWpPost.edges.map(({ node }, key) => (
            <Card key={key} node={node} />
          ))}
          {data.allWpPost.edges.map(({ node }, key) => (
            <Card key={key} node={node} />
          ))}
          <Pagination pageContext={pageContext} />
        </div>
        <MoreOptions />
      </MainDiv>
    </Layout>
    </div>
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

const MainDiv = styled.div`
  display: flex;
  flexdirection: row;
  @media (max-width: 721px) {
    display: contents;
  }
`
