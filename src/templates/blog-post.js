import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt, faUser, faTag } from "@fortawesome/free-solid-svg-icons"
import "./blog.css"
import { COLORS } from "../constants/colors"

export default ({ data }) => {
  console.log(data)
  const post = data.allWpPost.edges[0].node

  return (
    <Layout>
      <div
        id="blog"
        style={{ padding: `0 1.0875rem 1.45rem`, paddingTop: `1.0875rem` }}
      >
        <h1 style={{ marginBottom: "0.45rem" }}>{post.title}</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "0.45rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FontAwesomeIcon icon={faCalendarAlt} style={styles} />
            <span className="card-info">{post.date}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FontAwesomeIcon icon={faUser} style={styles} />
            <span className="card-info">{post.author.node.name}</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faTag}
              style={{
                color: COLORS.DANGO_PURPLE,
                marginRight: 5,
                alignSelf: "center",
                fontSize: "14px",
              }}
            />
            {post.categories.nodes.map(({ slug, name }) => (
              <div
                className="tags"
                style={{
                  backgroundColor: COLORS.DANGO_PURPLE,
                  borderRadius: "10px 10px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0px 3px",
                }}
              >
                <Link
                  to={`/tags/${slug}`}
                  replace
                  className="tags"
                  style={{
                    alignSelf: "center",
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    fontSize: "12px",
                    padding: "0px 10px",
                  }}
                >
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <p> By: {post.author.name} </p>
        <p> On: {post.date} </p>
      </div>
    </Layout>
  )
}

const styles = {
  color: COLORS.DANGO_PURPLE,
  marginRight: 5,
  alignSelf: "center",
  fontSize: "12px",
}

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
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
        }
      }
    }
  }
`
