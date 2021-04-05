/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const _ = require("lodash")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allWpPost(sort: {fields: [date], order: DESC}) {
        edges {
          node {
            title
            content
            excerpt
            slug
            date(formatString: "MM-DD-YYYY")
            author {
              node {
                username
                name
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
            featuredImage {
              node {
                sourceUrl
                uri
                title
              }
            }
          }
        }
      }

      allWpCategory(sort: {fields: slug}) {
        totalCount
        edges {
          node {
            slug
            name
            count
            posts {
              nodes {
                date(formatString: "MM-DD-YYYY")
                slug
                title
                content
                author {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve(`./src/templates/blog-post.js`)
  const tagsTemplate = path.resolve(`./src/templates/tags.js`)
  const tagsBlogTemplate = path.resolve(`./src/templates/blog-post-tag.js`)

  if (result.errors) {
    return
  }

  result.data.allWpPost.edges.forEach(({ node }) => {
    createPage({
      // Decide URL structure
      path: node.slug,
      // path to template
      component: postTemplate,
      context: {
        // This is the $slug variable
        // passed to blog-post.js
        slug: node.slug,
      },
    })
  })
  
  result.data.allWpPost.edges.forEach(({ node }) => {
    node.categories.nodes.forEach(( data ) => {
      createPage({
        // Decide URL structure
        path: `/tags/${data.slug}/${node.slug}`,
        // path to template
        component: tagsBlogTemplate,
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          tag: data.slug,
          slug: node.slug,
        },
      })
    })
  })


  result.data.allWpCategory.edges.forEach(({ node }) => {
    createPage({
      // Decide URL structure
      path: `/tags/${node.slug}`,
      // path to template
      component: tagsTemplate,
      context: {
        // This is the $slug variable
        // passed to blog-post.js
        slug: node.slug,
      },
    })
  })
}