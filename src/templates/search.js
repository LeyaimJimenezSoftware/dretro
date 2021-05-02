import React, { useState } from "react"
import styled from "styled-components"
import { Link, graphql, StaticQuery } from "gatsby"
import MoreOptions from "../components/MoreOptions"
import { COLORS } from "../constants/colors"
import { getPost } from "../constants/services"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ClientSearch from "../components/ClientSearch"

const search = props => {
  console.log("pors", props)
  const { pageContext, location } = props
  console.log(location.state.value)
  const { searchData } = pageContext
  const { allWpPost, options } = searchData
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <Layout>
        <div
          style={{
            padding: `0 1.0875rem 1.45rem`,
            margin: "0px 15px 5px 15px",
            boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
            backgroundColor: COLORS.DANGO_PURPLE
          }}
        >
          <p style={{ textTransform: "uppercase", color: COLORS.WHITE, fontSize: '30' }}>
            Resultados para: {location.state.value}
          </p>
        </div>
        <MainDiv>
          <div
            style={{
              padding: `0 1.0875rem 1.45rem`,
              margin: "0px 15px 5px 15px",
              boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
            }}
          >
            <SEO title="Dango Retro" />
            <ClientSearch
              books={allWpPost}
              engine={options}
              searchValue={location.state.value}
            />
          </div>
          <MoreOptions />
        </MainDiv>
      </Layout>
    </div>
  )
}

export default search

const NavDiv = styled.div`
  background-color: ${COLORS.DANGO_PURPLE};
  color: ${COLORS.WHITE};
  height: 35px;
  width: 35px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: ${COLORS.BLACK};
  }
`

const MainDiv = styled.div`
  display: flex;
  flexdirection: row;
  @media (max-width: 721px) {
    display: contents;
  }
`
