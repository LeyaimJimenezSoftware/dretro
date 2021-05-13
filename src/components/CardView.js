import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import MoreOptions from "../components/MoreOptions"
import { COLORS } from "../constants/colors"

const CardView = ({ allPost, searchInfo }) => {
  return (
    <div style={{ backgroundColor: COLORS.WHITE }}>
      <Layout>
        {searchInfo}
        <MainDiv>
          <BlogContainer>
            <MarginApp>{allPost}</MarginApp>
          </BlogContainer>
          <SideContainer>
            <MoreOptions />
          </SideContainer>
        </MainDiv>
      </Layout>
    </div>
  )
}

export default CardView

const MainDiv = styled.div`
  display: flex;
  flexdirection: row;
  @media (max-width: 721px) {
    display: contents;
  }
`

const BlogContainer = styled.div`
  width: 75%;
  @media (max-width: 721px) {
    width: 100%;
    margin-top: 15px;
  }
`

const SideContainer = styled.div`
  width: 25%;
  @media (max-width: 721px) {
    width: 100%;
  }
`
const MarginApp = styled.div`
  margin: 0px 15px 5px 15px;
`
