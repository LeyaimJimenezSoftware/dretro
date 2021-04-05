import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"

const Tags = ({data}) => {
  console.log('data nodes',data.allWpCategory.edges[0].node.posts)
  return (
    <Layout>
      <div style={{padding: `0 1.0875rem 1.45rem`}}>
      <SEO title="Dango Retro" />
      {data.allWpCategory.edges[0].node.posts.nodes.map(( data, key ) => (
        // console.log("nodesa", data)
        <Card key={key} node={data} />
      ))}
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($slug: String!) {
    allWpCategory(filter: {slug: {eq: $slug }}) {
      totalCount
      edges {
        node {
          slug
          name
          count
          posts {
            nodes {
              date(formatString: "MM-DD-YYYY")
              slug
              title
              content
              author {
                node {
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
                  uri
                  title
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
`