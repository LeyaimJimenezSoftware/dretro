import React from "react"
import { Link } from "gatsby"
import "./Tags.css"
import { COLORS } from "../constants/colors"

export default function TagCard ({slug, name, uri}) {
  return (
    <div
    className="tags"
  >
    <Link
      to={`${uri}`}
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
