import React from "react"
import styled from "styled-components"
import MoreOptions from "../components/MoreOptions"
import { COLORS } from "../constants/colors"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ClientSearch from "../components/ClientSearch"
import CardView from "../components/CardView"

const SearchPostTitle = ({location}) => {
  return (
    <>
      <div
        style={{
          // padding: `0 1.0875rem 1.45rem`,
          margin: "0px 15px 5px 15px",
          // boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
          backgroundColor: COLORS.DANGO_PURPLE,
        }}
      >
        <p
          style={{
            textTransform: "uppercase",
            color: COLORS.WHITE,
            fontSize: '30px',
            padding: 10,
          }}
        >
          Resultados para: {location.state.value}
        </p>
      </div>
    </>
  )
}

const SearchData = ({ allWpPost, options, locationData }) => {
  return (
    <>
      <SEO title="Dango Retro" />
      <ClientSearch
        books={allWpPost}
        engine={options}
        searchValue={locationData}
      />
    </>
  )
}

const search = props => {
  const { pageContext, location } = props
  const { searchData } = pageContext
  const { allWpPost, options } = searchData
  return (
    <>
    <CardView
      allPost={
        <SearchData
          allWpPost={allWpPost}
          options={options}
          locationData={location.state.value}
        />
      }
      searchInfo={<SearchPostTitle location={location} />}
    />
    </>
  )
}

export default search

const MainDiv = styled.div`
  display: flex;
  flexdirection: row;
  @media (max-width: 721px) {
    display: contents;
  }
`
