import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "./blog.css"

export default ({ data }) => {
  const post = data.allWpPost.edges[0].node
  return (
    <Layout>
      <div id="blog" style={{padding: `0 1.0875rem 1.45rem`, paddingTop: `1.0875rem`}}>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <p> By: {post.author.name} </p>
        <p> On: {post.date} </p>
      </div>
    </Layout>
  )
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
        }
      }
    }
  }
`