import React from "react"
import styled from "styled-components"
import portada from "../images/DangoRetro/portada/portada.png"
import SocialMediaLayout from "../components/SocialMediaLayout"
import { COLORS } from "../constants/colors"
import ratArmy from "../images/rat.png"
import dango from "../images/dangoretro.png"

const FooterPage = () => {
  return (
    <Footer>
      <div
        style={{
          padding: "1rem 0",
          color: COLORS.WHITE,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "200",
        }}
      >
        © {new Date().getFullYear()}
        {` `}
        <p style={{ color: COLORS.WHITE, marginBottom: 0, fontWeight: "200" }}>
          Dango Retro
        </p>
      </div>
      <div
        style={{
          alignContent: "space-between",
          display: "flex",
        }}
      >
        <ImagesParner>
          <div>
            <p style={{ color: COLORS.WHITE, marginBottom: "5px" }}>Partner</p>
          </div>
          <div>
            <img
              src={ratArmy}
              alt="dango"
              style={{
                height: "50px",
                width: "50px",
              }}
            />

            <img
              src={dango}
              alt="dango"
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          </div>
        </ImagesParner>
        <SocialDiv>
          <p style={{ color: COLORS.WHITE, marginBottom: "5px" }}>
            Redes Sociales
          </p>
          <SocialMediaLayout />
        </SocialDiv>
      </div>
    </Footer>
  )
}

export default FooterPage

const Footer = styled.footer`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  background-color: #1c1c1e;
  background-image: url(${portada});
`

const SocialDiv = styled.div`
  width: 50%;
  align-items: center;

  flex-direction: column;
  display: flex;
`

const ImagesParner = styled.div`
  width: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
