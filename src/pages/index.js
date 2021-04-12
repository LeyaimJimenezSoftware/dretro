import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"

const IndexPage = ({ data }) => {
  return (
    <div  style={{
      backgroundColor: '#ffffff',
    }}>
    <Layout>
      <div style={{padding: `0 1.0875rem 1.45rem`}}>
      <SEO title="Dango Retro" />
      {data.allWpPost.edges.map(({ node, key }) => (
        <Card key={key} node={node} />
      ))}
      </div>
      <div>Tags dadada</div>
    </Layout>
    </div>
  )
}

export default IndexPage

const MobileNav = styled.header`
  background-color: #1C1C1E;
  height: 100px;
  display: none;
  @media (max-width: 721px) {
    display: flex;
  }
`

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
