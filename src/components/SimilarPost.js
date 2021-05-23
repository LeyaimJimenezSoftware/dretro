import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import "./Header.css"
import { COLORS } from "../constants/colors"

const Posts = props => {
  const dataLength = props.data.length - 1
  return (
    <div
      style={{
        margin: "0px 15px 5px 15px",
        borderRadius: "0.2rem",
        backgroundColor: COLORS.DANGO_PURPLE,
        boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
      }}
    >
      <div
        className="name-logo"
        style={{
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
              <div id="image-top"  style={{
                    borderRadius: dataLength === key ? "0 0 .2rem .2rem" : "0",
                  }}>
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
