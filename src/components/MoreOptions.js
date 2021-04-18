import * as React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import kebabCase from "lodash/kebabCase"
import { faCircle, faSearch } from "@fortawesome/free-solid-svg-icons"
import { COLORS } from "../constants/colors"
import logoDango from "../images/dangoretro.png"
import facebook from "../images/facebook-logo.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"
import youtube from "../images/youtube.png"
import discord from "../images/discordlogo.png"
import "./Tags.css"

const MoreOptions = ({ data }) => {
  console.log("catego", data)
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
                      // display: 'none'
                    }}
                  />
                </Link>
              </LiTags>
            </DivTags>
          ))}
        </ul>
      </div>
      <div
        style={{
          boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
          marginBottom: "18px",
        }}
      >
        <h2 style={{display: 'flex', flexDirection: 'row', marginBottom: 0}}>
          <FontAwesomeIcon
            icon={faCircle}
            style={{
              color: COLORS.DANGO_PURPLE,
              marginLeft: 15,
              alignSelf: "center",
              fontSize: "10px",
            }}
          />
          <p
            className="tag-title"
            style={{
              padding: "10px 16px",
              fontSize: "1rem",
              textAlign: "center",
              marginBottom: 0,
            }}
          >
            Redes Scociales
          </p>
          <FontAwesomeIcon
            icon={faCircle}
            style={{
              color: COLORS.DANGO_PURPLE,
              marginRight: 15,
              alignSelf: "center",
              fontSize: "10px",
            }}
          />
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "0px 10px",
            justifyContent: "space-between",
          }}
        >
          <img
            src={facebook}
            style={{
              height: "50px",
              width: "50px",
              // margin: "0px 10px",
              // display: 'none'
            }}
          />
          <img
            src={youtube}
            style={{
              height: "50px",
              width: "50px",
              // margin: "0px 10px",
              // display: 'none'
            }}
          />
          <img
            src={twitter}
            style={{
              height: "50px",
              width: "50px",
              // margin: "0px 10px",
              // display: 'none'
            }}
          />
        </div>
      </div>
      <div
        style={{
          boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
        }}
      >
        <img
          src={discord}
          style={{
            // height: "26px",
            // width: "26px",
            // margin: "0px 10px",
            // display: 'none'
            marginBottom: 0,
          }}
        />
      </div>
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
