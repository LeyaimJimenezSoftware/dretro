import * as React from "react"
import SocialMedia from "../components/SocialMedia"
import Category from "../components/Category"
import Search from "../components/Search"
import BestPost from "../components/BestPost"
import FacebookMedia from "../components/FacebookMedia"
import "./Tags.css"

const MoreOptions = ({ data }) => {
  return (
    <div
      style={{
        padding: "0px 15px",
        width: "100%",
      }}
    >
      <BestPost />
      <Search />
      <Category />
      <SocialMedia />
      <FacebookMedia />
    </div>
  )
}

export default MoreOptions
