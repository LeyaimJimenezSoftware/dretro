import * as React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import kebabCase from "lodash/kebabCase"
import SocialMedia from '../components/SocialMedia'
import BestPost from '../components/BestPost'
import { faCircle, faSearch } from "@fortawesome/free-solid-svg-icons"
import { COLORS } from "../constants/colors"
import logoDango from "../images/dangoretro.png"
import "./Tags.css"

const MoreOptions = ({ data }) => {
  return (
    <div
      style={{
        padding: "0px 15px",
        width: "100%",
      }}
    >
      <div
        style={{
          boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
          marginBottom: "18px",
        }}
        className="wrap"
      >
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Buscar" />
          <button type="submit" className="searchButton">
            <FontAwesomeIcon
              icon={faSearch}
              style={{
                color: "white",
                marginRight: 5,
                alignSelf: "center",
                fontSize: "20px",
              }}
            />
          </button>
        </div>
      </div>
      <div>
        <TagsTitle>
          <p className="tag-title" style={{ marginBottom: 0 }}>
            Tags
          </p>
        </TagsTitle>
        <ul style={{ marginLeft: 0 }}>
          {data.nodes.map((tag, key) => (
            <DivTags>
              <LiTags key={key}>
                <Link className="tag-link" to={`/tags/${kebabCase(tag.slug)}`}>
                  <div
                    style={{
                      backgroundColor: COLORS.DANGO_PURPLE,
                      height: "20px",
                      width: "3px",
                      margin: "0px 5px",
                    }}
                  />
                  {tag.name}
                  <img
                    src={logoDango}
                    style={{
                      height: "26px",
                      width: "26px",
                      margin: "0px 10px",
                    }}
                  />
                </Link>
              </LiTags>
            </DivTags>
          ))}
        </ul>
      </div>
      <SocialMedia />
      <BestPost />
    </div>
  )
}

export default MoreOptions

const DivTags = styled.div`
  display: flex;
  flex-direction: row;
`

const LiTags = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const TagsTitle = styled.h2`
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 1rem;
`
const optionsNav = styled.div`
  display: flex;
  flex-direction: row;
  a {
    color: #ffffff;
    text-align: center;
    padding: 1em;
    text-decoration: none;
    font-size: 1em;
    &:hover {
      color: #4e52f8;
    }
  }
  @media (max-width: 721px) {
    display: none;
  }
`
