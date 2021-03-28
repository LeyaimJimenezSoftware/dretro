import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./Header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#1C1C1E`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className="page-name" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "#BDA4D7",
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Leya`,
}

export default Header
