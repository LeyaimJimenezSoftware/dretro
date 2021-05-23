import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Posts = props => {
  return (
    <div>
     holas
    </div>
  )
}

export default function SearchResult({location}) {
 
  return (
    <StaticQuery
      query={graphql`
      query {
        allWpPost(sort: {fields: [date], order: DESC}) {
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
    }
      render={data => {
        return <Posts data={data} />
      }}
    />
  )
}
