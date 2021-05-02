import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { COLORS } from "../constants/colors"
import "./Card.css"

const Top = ({ data }) => {
  return (
    <div
      style={{
        padding: "0px 0px 0px 0px",
        width: "100%",
      }}
    >
      <div
        style={{
          boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
        }}
      >
        <h2
          className="top-post-title"
          style={{
            backgroundColor: COLORS.DANGO_PURPLE,
            marginBottom: 0,
            display: "flex",
            height: "60px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ marginBottom: 0, fontSize: "20px", color: COLORS.WHITE }}>Destacados</p>
        </h2>
        <div>
          {data.allWpPost.nodes.map((data, key) => {
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
                      <p style={{marginBottom: 0 , padding: '10px 10px', fontWeight: "bold", fontSize: '20px'}}>{data.title}</p>
                    </div>
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
