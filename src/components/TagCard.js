import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import "../templates/blog.css"
import { COLORS } from "../constants/colors"

export default function TagCard ({slug, name, uri}) {
  return (
    <div
    className="tags"
    style={{
      backgroundColor: COLORS.DANGO_PURPLE,
      borderRadius: "10px 10px",
      height: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0px 3px",
    }}
  >
    <Link
      to={`${uri}`}
      replace
      className="tags"
      style={{
        alignSelf: "center",
        fontWeight: "900",
        textTransform: "uppercase",
        fontSize: "12px",
        padding: "0px 10px",
      }}
    >
      {name}
    </Link>
  </div>
  )
}
