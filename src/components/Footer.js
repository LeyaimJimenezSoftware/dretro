import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"
import styled from "styled-components"

const FooterPage = ({ siteTitle }) => {
  return (
    <footer
      style={{
        marginTop: `2rem`,
        backgroundColor: '#1C1C1E',
        height: '100px',
      }}
    >
      <div style={{color: '#4e52f8', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      © {new Date().getFullYear()}
      {` `}
        <p style={{color: '#4e52f8', marginBottom: 0}}>Dango Retro</p>
      </div>
    </footer>
  )
}

export default FooterPage

const NavHeader = styled.header`
  background-color: #1c1c1e;
  margin-bottom: 1.45rem;
  @media (max-width: 721px) {
    margin-bottom: 0;
  }
`

const NavStyle = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  @media (max-width: 721px) {
    padding: 0;
  }
`

const TopNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fafafa;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1101;
  top: 0;
  width: 100vw;
`
const Logo = styled.div`
  padding: 1em 1em 0 1em;
`

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 1em;
  a {
    color: #ffffff;
    text-align: center;
    padding: 1em;
    text-decoration: none;
    font-size: 1em;
    &:hover {
      color: #bda4d7;
    }
  }
  @media (max-width: 721px) {
    display: none;
  }
`

const SideMenu = styled.div`
  /* Individual item */
  .bm-item {
    display: inline-block;
    /* Our sidebar item styling */
    text-decoration: none;
    margin-bottom: 10px;
    color: #bda4d7;
    transition: color 0.2s;
  }
  /* Change color on hover */
  .bm-item:hover {
    color: white;
  }
  /* The rest copied directly from react-burger-menu docs */
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 36px;
  }
  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #bda4d7;
  }
  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }
  /* General sidebar styles */
  .bm-menu {
    background: #1c1c1e;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }
  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
  }
  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  @media (min-width: 720px) {
    display: none;
  }
`
