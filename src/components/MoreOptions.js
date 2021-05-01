import * as React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import SocialMedia from '../components/SocialMedia'
import Category from "../components/Category"
import Search from '../components/Search'
import BestPost from '../components/BestPost'
import { faCircle, faSearch } from "@fortawesome/free-solid-svg-icons"
import { COLORS } from "../constants/colors"
import logoDango from "../images/dangoretro.png"
import "./Tags.css"

const MoreOptions = ({ data }) => {
  return (
    <div
      style={{
        padding: "0px 15px",
        width: "100%",
      }}
    >
      <Search />
      <Category />
      <SocialMedia />
      <BestPost />
    </div>
  )
}

export default MoreOptions
