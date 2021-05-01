import * as React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import kebabCase from "lodash/kebabCase"
import { faCircle, faSearch } from "@fortawesome/free-solid-svg-icons"
import { COLORS } from "../constants/colors"
import logoDango from "../images/dangoretro.png"
import facebook from "../images/facebook-logo.png"
import twitch from "../images/Twitch.png"
import twitter from "../images/twitter.png"
import youtube from "../images/youtube.png"
import discord from "../images/discordlogo.png"
import "./Tags.css"

const SocialMedia = ({ data }) => {
  return (
    <div
      style={{
        padding: "0px 15px 0px 0px",
        width: "100%",
        marginBottom: "1.45rem",
      }}
    >
      <div
        style={{
          boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
          marginBottom: "18px",
        }}
      >
        <h2 style={{ display: "flex", flexDirection: "row", marginBottom: 0 }}>
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
          <a href="https://www.facebook.com/dangoretro">
            <img
              src={facebook}
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          </a>
          <a href="https://www.youtube.com/channel/UCpfP9DXZ-NyV4sNIwKHUBxA">
            <img
              src={youtube}
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          </a>
          <a href="https://twitter.com/DangoRetro">
            <img
              src={twitter}
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          </a>
          <a href="https://www.twitch.tv/dangoretro">
            <img
              src={twitch}
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          </a>
        </div>
      </div>
      <div
        style={{
          boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
        }}
      >
        <a href="https://discord.gg/UdN6fHnMgu">
          <img
            src={discord}
            style={{
              marginBottom: 0,
            }}
          />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
