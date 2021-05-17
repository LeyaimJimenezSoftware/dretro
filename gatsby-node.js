/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const _ = require("lodash")
const { paginate, createPagePerItem } = require("gatsby-awesome-pagination")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            title
            uri
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

      allWpCategory(sort: { fields: slug }) {
        totalCount
        edges {
          node {
            slug
            uri
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

      allWpTag {
        edges {
          node {
            uri
            name
            slug
          }
        }
      }
    }
  `)

  paginate({
    createPage, // The Gatsby `createPage` function
    items: result.data.allWpPost.edges, // An array of objects
    itemsPerPage: 10, // How many items you want per page
    pathPrefix: "/noticias/page", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve("./src/templates/blog.js"),
  })

  const postTemplate = path.resolve(`./src/templates/blog-post.js`)
  const tagsTemplate = path.resolve(`./src/templates/tags.js`)
  const tagsBlogTemplate = path.resolve(`./src/templates/blog-post-tag.js`)
  const CategoryTemplate = path.resolve(`./src/templates/category.js`)

  if (result.errors) {
    return
  }

  result.data.allWpPost.edges.forEach(({ node }) => {
    createPage({
      // Decide URL structure
      path: node.uri,
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
    node.categories.nodes.forEach(data => {
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

  const posts = result.data.allWpPost.edges
  const postsPerPage = 3
  const numPages = Math.ceil(posts.length / postsPerPage)

  result.data.allWpPost.edges.forEach(({ node }, i) => {
    const pageNum = Math.ceil((i + 1) / postsPerPage)
    createPage({
      // Decide URL structure
      path:
        pageNum === 1
          ? `noticias/page/${node.slug}`
          : `/noticias/page/${pageNum}/${node.slug}`,
      // path to template
      component: postTemplate,
      context: {
        // This is the $slug variable
        // passed to blog-post.js
        slug: node.slug,
      },
    })
  })

  const categoryesPath = result.data.allWpCategory.edges.map( async({ node }) => {
      const response = await graphql(`
      {
        allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "${node.slug}"}}}}}) {
          edges {
            node {
              title
              uri
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
                  uri
                }
              }
              featuredImage {
                node {
                  sourceUrl
                  uri
                  title
                }
              }
              tags {
                nodes {
                  slug
                  name
                  uri
                }
              }
            }
          }
        }
      }
    `)
    paginate({
      createPage, // The Gatsby `createPage` function
      items: response.data.allWpPost.edges, // An array of objects
      itemsPerPage: 5, // How many items you want per page
      pathPrefix: `/category/${node.slug}`, // Creates pages like `/blog`, `/blog/2`, etc
      component: CategoryTemplate,
      context: {
        // This is the $slug variable
        // passed to blog-post.js
        slug: node.slug,
      },
    })
  })

  await Promise.all(categoryesPath)

  const tagsPath = result.data.allWpTag.edges.map(async({ node }) => {
    const response = await graphql(`
    {
      allWpPost(
        filter: {tags: {nodes: {elemMatch: {slug: {eq: "${node.slug}"}}}}}
        sort: {fields: date, order: DESC}
      ) {
        edges {
          node {
            title
            uri
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
                uri
              }
            }
            featuredImage {
              node {
                sourceUrl
                uri
                title
              }
            }
            tags {
              nodes {
                slug
                name
                uri
              }
            }
          }
        }
      }
    }
  `)
    paginate({
      createPage, // The Gatsby `createPage` function
      items: response.data.allWpPost.edges, // An array of objects
      itemsPerPage: 5, // How many items you want per page
      pathPrefix: `/tag/${node.slug}`, // Creates pages like `/blog`, `/blog/2`, etc
      component: tagsTemplate,
      context: {
        // This is the $slug variable
        // passed to blog-post.js
        slug: node.slug,
      },
    })
  })

  await Promise.all(tagsPath)

  createPage({
    path: "/search/blog",
    component: path.resolve(`./src/templates/search.js`),
    context: {
      searchData: {
        allWpPost: result.data.allWpPost.edges,
        options: {
          indexStrategy: "Prefix match",
          searchSanitizer: "Lower Case",
          TitleIndex: true,
          AuthorIndex: true,
          SearchByTerm: true,
        },
      },
    },
  })
}
