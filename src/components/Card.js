import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt, faUser } from "@fortawesome/free-solid-svg-icons"
import { COLORS } from "../constants/colors"
import TagCard from "../components/TagCard"
import "./Card.css"

const Card = ({ node }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        marginBottom: "20px",
        boxShadow: `inset 0 -1px 0 rgba(79,131,170,.2), 0 0 30px rgba(0,0,0,.07)`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div id="imageDiv" className="img-card">
          <Link to={`${node.uri}`}>
            <img
              id="content"
              src={node.featuredImage.node.sourceUrl}
              alt={`${node.slug}-img`}
            />
          </Link>
        </div>
        <div style={{ paddingTop: "10px" , margin: "0px 15px"}}>
          <Link to={`${node.uri}`}>
            <h2 style={{ marginBottom: 0 }}>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: 0,
                  fontFamily: 'sans-serif',
                }}
              >
                {node.title}
              </p>
            </h2>
          </Link>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', padding: '5px 0px 10px' }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <FontAwesomeIcon icon={faCalendarAlt} style={styles.cardStyle} />
              <span className="card-info">{node.date}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <FontAwesomeIcon icon={faUser} style={styles.cardStyle} />
              <span className="card-info">{node.author.node.name}</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {node.categories.nodes.map(({ slug, name, uri }, key) => (
                <TagCard slug={slug} name={name} key={key} uri={uri} />
              ))}
            </div>
          </div>
          <div
            className="card-text-info"
            style={{ fontSize: "14px", color: "#666666" }}
            dangerouslySetInnerHTML={{ __html: node.excerpt }}
          />
        </div>
      </div>
    </div>
  )
}

export default Card

const styles = {
  cardStyle: {
    color: COLORS.DANGO_PURPLE,
    marginRight: 5,
    alignSelf: "center",
    fontSize: "12px",
  },
}
