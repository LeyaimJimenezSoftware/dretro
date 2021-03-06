import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt, faUser, faTag } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import SimilarPost from "../components/SimilarPost"
import { DiscussionEmbed } from "disqus-react"
import MoreOptions from "../components/MoreOptions"
import TagCard from "../components/TagCard"
import "./blog.css"
import { COLORS } from "../constants/colors"

export default ({ data }) => {
  const post = data.allWpPost.edges[0].node
  const { title, slug } = post

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title },
  }

  return (
    <Layout>
      <MainDiv>
        <BlogContainer>
          <div
            id="blog"
            style={{
              padding: `1.0875rem 1.45rem`,
              margin: "0px 15px 5px 15px",
              borderRadius: "0.2rem",
              boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
            }}
          >
            <h1 style={{ marginBottom: "0.45rem" }}>{title}</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "0.45rem",
                flexWrap: "wrap",
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
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {post.categories.nodes.map(({ slug, name, uri }, key) => (
                  <TagCard slug={slug} name={name} key={key} uri={uri} />
                ))}
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
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
              {post.tags.nodes.map(({ slug, name, uri }, key) => (
                <TagCard slug={slug} name={name} key={key} uri={uri} />
              ))}
            </div>
          </div>
          <SimilarPost category={post.categories} />
          <div
            style={{
              margin: "0px 15px 5px 15px",
              borderRadius: "0.2rem",
              boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
            }}
            >
            <div
              className="name-logo"
              style={{
                backgroundColor: COLORS.DANGO_PURPLE,
                color: COLORS.WHITE,
                borderRadius: ".2rem .2rem 0 0",
                display: "flex",
                height: "60px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  alignSelf: "center",
                  marginBottom: 0,
                  fontSize: "20px",
                }}
              >
                Comentarios
              </p>
            </div>
            <div style={{margin: '10px'}}>
              <DiscussionEmbed {...disqusConfig} />
            </div>
          </div>
        </BlogContainer>
        <SideContainer>
          <MoreOptions />
        </SideContainer>
      </MainDiv>
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
              uri
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

const MainDiv = styled.div`
  display: flex;
  flexdirection: row;
  @media (max-width: 721px) {
    display: contents;
  }
`
const BlogContainer = styled.div`
  width: 75%;
  @media (max-width: 721px) {
    width: 100%;
  }
`

const SideContainer = styled.div`
  width: 25%;
  @media (max-width: 721px) {
    width: 100%;
  }
`
