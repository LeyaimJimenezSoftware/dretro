import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import "./Header.css"
import { COLORS } from "../constants/colors"

const Pagination = ({ pageContext }) => {
  const {
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages,
  } = pageContext
  console.log("hola", pageContext)
  return (
    <>
      {numberOfPages !== 1 && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Link to={previousPagePath}>
            <NavDiv>
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ alignSelf: "center", fontSize: "22px" }}
              />
            </NavDiv>
          </Link>

          <p>{humanPageNumber}</p>
          {nextPagePath ? (
            <Link to={nextPagePath}>
              <NavDiv>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ alignSelf: "center", fontSize: "22px" }}
                />
              </NavDiv>
            </Link>
          ) : (
            <div>
              <a style={{cursor: 'not-allowed', color: 'gray', backgroundColor: 'gray'}}>
                <NavDivBlock>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ alignSelf: "center", fontSize: "22px" }}
                  />
                </NavDivBlock>
              </a>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Pagination

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

const NavDivBlock = styled.div`
  background-color: gray;
  color: ${COLORS.WHITE};
  height: 35px;
  width: 35px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
`

