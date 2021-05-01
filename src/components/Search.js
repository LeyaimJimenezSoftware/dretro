import * as React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import "./Tags.css"

const Search = () => {
  return (
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
  )
}

export default Search 