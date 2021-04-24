import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MoreOptions from "../components/MoreOptions"
import Card from "../components/Card"
import { COLORS } from "../constants/colors"

const IndexPage = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
      }}
    >
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
            {data.allWpPost.edges.map(({ node, key }) => (
              <Card key={key} node={node} />
            ))}
            <div
              style={{
                backgroundColor: COLORS.DANGO_PURPLE,
                borderRadius: "10px 10px",
                height: "24px",
                display: 'flex',
                justifyContent: 'center',
                margin: "0px 3px",
              }}
            >
              <Link
                to={`/noticias/page`}
                style={{
                  alignSelf: 'center',
                  fontSize: "12px",
                  color: COLORS.WHITE,
                }}
              >
                <p style={{paddingBottom: 0, marginBottom: 0}}>Ver más</p>
              </Link>
            </div>
          </div>
          <MoreOptions data={data?.allWpCategory} />
        </MainDiv>
      </Layout>
    </div>
  )
}

export default IndexPage

const MainDiv = styled.div`
  display: flex;
  flexdirection: row;
  @media (max-width: 721px) {
    display: contents;
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

    allWpCategory(limit: 10, sort: { fields: count, order: DESC }) {
      totalCount
      nodes {
        slug
        name
        count
      }
    }
  }
`
