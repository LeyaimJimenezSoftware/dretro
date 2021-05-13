import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { COLORS } from "../constants/colors"
import "./Card.css"
import styled from "styled-components"
import logoDango from "../images/dangoretro.png"
import "./Tags.css"

const CategoryList = ({ data }) => {
  return (
    <div>
      <TagsTitle>
        <p className="tag-title" style={{ marginBottom: 0 }}>
          Tags
        </p>
      </TagsTitle>
      <ul style={{ marginLeft: 0 }}>
        {data.allWpCategory.nodes?.map((tag, key) => (
          <DivTags key={key}>
            <LiTags key={key}>
              <Link className="tag-link" to={`${tag.uri}`}>
                <div
                  style={{
                    backgroundColor: COLORS.DANGO_PURPLE,
                    height: "20px",
                    width: "3px",
                    margin: "0px 5px",
                  }}
                />
                {tag.name}
                <img
                  src={logoDango}
                  alt="dango"
                  style={{
                    height: "26px",
                    width: "26px",
                    margin: "0px 10px",
                  }}
                />
              </Link>
            </LiTags>
          </DivTags>
        ))}
      </ul>
    </div>
  )
}

export default function Category(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allWpCategory(limit: 10, sort: { fields: count, order: DESC }) {
            totalCount
            nodes {
              slug
              uri
              name
              count
            }
          }
        }
      `}
      render={data => <CategoryList  data={data} {...props} />}
    />
  )
}

const DivTags = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
`

const LiTags = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
`
const TagsTitle = styled.h2`
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 1rem;
`
