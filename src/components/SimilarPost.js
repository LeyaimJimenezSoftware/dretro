import React, { useState } from "react"
import styled from "styled-components"
import { Link, graphql, StaticQuery } from "gatsby"
import "./Header.css"
import { COLORS } from "../constants/colors"
import { getPost } from "../constants/services"

const Posts = props => {
  console.log("post", props.data)
  return (
    <div
      style={{
        margin: "0px 15px 5px 15px",
        boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
      }}
    >
      <div
        className="name-logo"
        style={{
          backgroundColor: COLORS.DANGO_PURPLE,
          color: COLORS.WHITE,
          display: "flex",
          height: "60px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ alignSelf: "center", marginBottom: 0, fontSize: "20px" }}>
          Noticias similares
        </p>
      </div>
      <div>
          {props.data.map((data, key) => {
            return (
              <div key={key} style={{ height: "100%", width: "100%" }}>
                <div id="image-top" className="img-card">
                  <Link to={`${data.uri}`}>
                    <img
                      id="content"
                      src={data.featuredImage.node.sourceUrl}
                      alt={`${data.slug}-img`}
                    />
                    <div
                      className="top-post-title-sections"
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        backgroundColor: "hsla(0,0%,0%,0.5)",
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <p style={{marginBottom: 0 , padding: '10px 10px', fontWeight: "bold", fontSize: '30px'}}>{data.title}</p>
                    </div>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default function SimilarPost(props) {
  const filterByValue = (array, string) => {
    return array.filter(data => {
      return data.categories.nodes.find(data => data.slug === string)
    })
  }
  return (
    <StaticQuery
      query={defaultPosts}
      render={data => {
        const posts = filterByValue(
          data.allWpPost.nodes,
          props.category.nodes[0].slug
        )
        return <Posts data={posts} {...props} />
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

const defaultPosts = graphql`
  query {
    allWpPost(limit: 5, sort: { order: DESC, fields: date }) {
      nodes {
        slug
        uri
        comments {
          nodes {
            content
          }
        }
        tags {
          nodes {
            slug
            name
            uri
          }
        }
        title
        featuredImage {
          node {
            uri
            title
            sourceUrl
          }
        }
        categories {
          nodes {
            slug
            name
            uri
          }
        }
      }
    }
  }
`
