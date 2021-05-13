/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import "@fontsource/press-start-2p"
import "@fontsource/open-sans" // Defaults to weight 400 with all styles included.
import Header from "./header"
import FooterPage from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1140,
        }}
      >
        <MobileNav>
          <Link style={{ display: "flex" }} to="/">
            <h1
              className="menu-font"
              style={{
                textAlign: "center",
                alignSelf: "center",
                margin: 0,
                color: "white",
                paddingLeft: "10px",
              }}
            >
              Dango Retro
            </h1>
          </Link>
        </MobileNav>
        <main>{children}</main>
      </div>
      <FooterPage />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const MobileNav = styled.header`
  background-color: #1c1c1e;
  height: 100px;
  display: none;
  @media (max-width: 721px) {
    display: flex;
  }
`
