import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"
import styled from "styled-components"
import portada from "../images/DangoRetro/portada/portada.png"

const FooterPage = ({ siteTitle }) => {
  return (
    <Footer>
      <div
        style={{
          color: "#4e52f8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        © {new Date().getFullYear()}
        {` `}
        <p style={{ color: "#4e52f8", marginBottom: 0 }}>Dango Retro</p>
      </div>
    </Footer>
  )
}

export default FooterPage

const Footer = styled.footer`
  margin-top: 2rem;
  background-color: #1c1c1e;
  background-image: url(${portada});
  height: 100px;
`
