







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
  query($slug: String!, $tag: String!) {
    allWpPost(
      filter: {slug: {eq: $slug}, categories: {nodes: {elemMatch: {slug: {eq: $tag}}}}}
    ) {
      edges {
        node {
          title
          content
          excerpt
          slug
          date(formatString: "MM-DD-YYYY")
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
          author {
            node {
              username
              name
              slug
            }
          }
        }
      }
    }
  }
`