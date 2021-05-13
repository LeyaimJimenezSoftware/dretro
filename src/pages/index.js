import * as React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Card from "../components/Card"
import CardView from "../components/CardView"
import { COLORS } from "../constants/colors"

const AllPostData = ({ data }) => {
  return (
    <>
      <SEO title="Dango Retro" />
      {data.allWpPost.edges.map(({ node }, key) => (
        <Card key={key} node={node} />
      ))}
      <div
        style={{
          backgroundColor: COLORS.DANGO_PURPLE,
          borderRadius: "10px 10px",
          height: "24px",
          display: "flex",
          justifyContent: "center",
          margin: "0px 3px",
        }}
      >
        <Link
          to={`/noticias/page`}
          style={{
            alignSelf: "center",
            fontSize: "12px",
            color: COLORS.WHITE,
          }}
        >
          <p style={{ paddingBottom: 0, marginBottom: 0 }}>Ver más</p>
        </Link>
      </div>
    </>
  )
}

const IndexPage = ({ data }) => {
  return (
    <CardView
      allPost={<AllPostData data={data} />}
    />
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date], order: DESC }) {
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
