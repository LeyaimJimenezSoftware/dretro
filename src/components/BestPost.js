import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import { COLORS } from "../constants/colors"
import "./Card.css"

const Top = ({ data }) => {
  const dataLength = data.allWpPost.nodes.length - 1
  return (
    <div
      style={{
        padding: "0px 0px 0px 0px",
        width: "100%",
        borderRadius: ".2rem",
      }}
    >
      <div
        style={{
          boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
          borderRadius: ".2rem",
          backgroundColor: COLORS.DANGO_PURPLE,
        }}
      >
        <h2
          className="top-post-title"
          style={{
            marginBottom: 0,
            display: "flex",
            height: "60px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ marginBottom: 0, fontSize: "20px", color: COLORS.WHITE }}>
            Destacados
          </p>
        </h2>
        <div>
          {data.allWpPost.nodes.map((data, key) => {
            return (
              <div key={key} style={{ height: "100%", width: "100%" }}>
                <div
                  id="image-top"
                  style={{
                    borderRadius: dataLength === key ? "0 0 .2rem .2rem" : "0",
                  }}
                >
                  <Link id="text-effect" to={`${data.uri}`}>
                    <div className="text">{data.title}</div>
                    <img
                      id="content"
                      src={data?.featuredImage?.node?.sourceUrl}
                      alt={`${data.slug}-img`}
                    />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function BestPost(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allWpPost(sort: { fields: commentCount }, limit: 5) {
            nodes {
              slug
              uri
              comments {
                nodes {
                  content
                }
              }
              commentCount
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
            }
          }
        }
      `}
      render={data => <Top data={data} {...props} />}
    />
  )
}

const Textdiv = styled.div`
  background: rgba(0, 0, 0, 0.45);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  display: inline-block;
  font-size: 1.1rem;
  font-weight: bold;
  height: 100%;
  line-height: 1.4;
  padding: 1rem;
  position: absolute;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 20%);
  top: 0;
  transition: opacity 0.5s ease-in-out;
  width: 100%;
  z-index: 2;
`
