import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const TagsPage = ({
  data: {
    allWpTag: { nodes },
  },
}) => {
  return (
    <div>
      <Helmet title={"Categorías"} />
      <Layout>
        <div style={{ padding: `0 1.0875rem 1.45rem` }}>
          <SEO title="Dango Retro" />
          <div>
            <h1>Tags</h1>
            <ul>
              {nodes.map(tag => (
                <li key={tag.fieldValue}>
                  <Link to={tag.uri}>
                    {tag.name} ({tag.count})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allWpTag {
      nodes {
        slug
        name
        count
        uri
      }
    }
  }
`
