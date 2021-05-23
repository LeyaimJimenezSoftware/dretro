import * as React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Slider from "../components/Slider"
import styled from "styled-components"
import dango from "../images/DangoRetro/portada/portada.png"
import "./flickity.css"

const CarouselData = ({ data }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }} />
      <Slider
        options={{
          autoPlay: 4000,
          pauseAutoPlayOnHover: true,
          wrapAround: true,
          fullscreen: true,
          adaptiveHeight: true,
        }}
      >
        {data.allWpPost.edges.map(({ node }, key) => (
          <div style={{ width: "100%", height: "400px" }} key={key}>
            <StyledLink className="tag-link" to={`${node.uri}`}>
              <PostName>{node.title}</PostName>
            </StyledLink>
            <img src={node.featuredImage.node.sourceUrl} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default function Carousel(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allWpPost(limit: 4) {
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
      `}
      render={data => <CarouselData data={data} {...props} />}
    />
  )
}

const PostName = styled.h4`
  box-sizing: border-box;
  color: #fff;
  display: block;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 1.3;
  margin: 1rem 2rem;
  text-shadow: 2px 2px 2px rgb(0 0 0 / 30%);
  text-transform: uppercase;
`
const StyledLink = styled(props => <Link {...props} />)`
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.4) 20%,
    rgba(0, 0, 0, 0.1) 75%,
    rgba(0, 0, 0, 0)
  );
  display: block;
  height: 100%;
  position: absolute;
  text-decoration: none;
  top: 0;
  width: 100%;
  z-index: 2;
`
