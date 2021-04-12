import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"
import styled from "styled-components"
import logoDango from "../images/dangoretro.png"
import "./Header.css"

const Header = ({ siteTitle }) => {
  const [menuState, setMenuOpen] = useState({ menuOpen: false })

  const closeMenu = () => {
    setMenuOpen({ menuOpen: false })
  }

  return (
    <NavHeader>
      <NavStyle>
        <NavItems>
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="page-name"
          >
            <div>
              <Link className="nav-options" to="/">
                Home
              </Link>
              <Link className="nav-options" to="/tags/anime">
                Anime
              </Link>
              <Link to="/tags/manga">Manga</Link>
            </div>
            <div className="name-logo" style={{margin: '0px 50px'}}>
            <p style={{marginBottom: 0, color: '#4e52f8' }}>Dango Retro</p>
            </div>
            <div>
              <Link to="/tags/videojuegos">Videojuegos</Link>
              <Link to="/tags">Tags</Link>
              <Link href="#">Dangokura</Link>
            </div>
          </div>
        </NavItems>

        <SideMenu>
          <Menu disableAutoFocus isOpen={menuState.menuOpen}>
            <Link className="menu-item" to="/" onClick={() => closeMenu()}>
              Home
            </Link>

            <Link
              className="menu-item"
              to="/articles"
              onClick={() => closeMenu()}
            >
              Anime
            </Link>

            <Link
              className="menu-item"
              to="/centered-div"
              onClick={() => closeMenu()}
            >
              Manga
            </Link>

            <Link
              className="menu-item"
              to="/form-sample"
              onClick={() => closeMenu()}
            >
              Videojuegos
            </Link>

            <Link
              className="menu-item"
              to="/reactstrap-form"
              onClick={() => closeMenu()}
            >
              Tags
            </Link>

            <Link
              className="menu-item"
              to="/react-final-form"
              onClick={() => closeMenu()}
            >
              Dangokura
            </Link>
            <Link
              className="menu-item"
              to="/react-final-form"
              onClick={() => closeMenu()}
            >
              Discord
            </Link>
          </Menu>
        </SideMenu>
      </NavStyle>
    </NavHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Leya`,
}

export default Header

const NavHeader = styled.header`
  background-color: #1c1c1e;
  margin-bottom: 1.45rem;
  @media (max-width: 721px) {
    margin-bottom: 0;
  }
`

const NavStyle = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  @media (max-width: 721px) {
    padding: 0;
    display: block;
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
      color: #4e52f8;
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
    color: #4e52f8;
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
    background: #4e52f8;
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
