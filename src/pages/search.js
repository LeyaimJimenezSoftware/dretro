import React, { useState } from "react"
import styled from "styled-components"
import { Link, graphql, StaticQuery } from "gatsby"
import { COLORS } from "../constants/colors"
import { getPost } from "../constants/services"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Posts = props => {
  console.log("post", props.data)
  return (
    <div>
     holas
    </div>
  )
}

export default function SearchResult({location}) {
  console.log(location?.state?.value)
 
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

const NavDiv = styled.div`
  background-color: ${COLORS.DANGO_PURPLE};
  color: ${COLORS.WHITE};
  height: 35px;
  width: 35px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: ${COLORS.BLACK};
  }
`
