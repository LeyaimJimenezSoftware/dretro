import * as React from "react"
import { COLORS } from "../constants/colors"
import facebook from "../images/facebook-logo.png"
import twitch from "../images/Twitch.png"
import twitter from "../images/twitter.png"
import youtube from "../images/youtube.png"
import discord from "../images/discord-white.png"
import "./Tags.css"

const SocialMedia = ({ data }) => {
  return (
    <div
      style={{
        padding: "0px 0px 0px 0px",
        width: "100%",
        marginBottom: "1.45rem",
      }}
    >
      {/* <div
        style={{
          boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
          marginBottom: "18px",
        }}
      >
        <h2
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 10,
            backgroundColor: COLORS.DANGO_PURPLE,
          }}
        >
          <p
            className="tag-title"
            style={{
              padding: "10px 16px",
              fontSize: "1rem",
              textAlign: "center",
              marginBottom: 0,
              color: COLORS.WHITE,
            }}
          >
            Redes Scociales
          </p>
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
              alt="facebook"
              style={{
                height: "50px",
                width: "50px",
                marginBottom: 0,
              }}
            />
          </a>
          <a href="https://www.youtube.com/channel/UCpfP9DXZ-NyV4sNIwKHUBxA">
            <img
              src={youtube}
              alt="youtube"
              style={{
                height: "50px",
                width: "50px",
                marginBottom: 0,
              }}
            />
          </a>
          <a href="https://twitter.com/DangoRetro">
            <img
              src={twitter}
              alt="twitter"
              style={{
                height: "50px",
                width: "50px",
                marginBottom: 0,
              }}
            />
          </a>
          <a href="https://www.twitch.tv/dangoretro">
            <img
              src={twitch}
              alt="twitch"
              style={{
                height: "50px",
                width: "50px",
                marginBottom: 0,
              }}
            />
          </a>
        </div>
      </div> */}
      <div
        style={{
          boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
          display: 'flex',
          flexDirection: "row-reverse",
          backgroundColor: COLORS.DANGO_PURPLE
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
       
          }}
        >
          <a
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              width: "100%",
            }}
            href="https://discord.gg/UdN6fHnMgu"
          >
            <img
              alt="discord"
              src={discord}
              style={{
                marginBottom: 0,
              }}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
