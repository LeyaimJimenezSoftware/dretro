import { graphql } from "gatsby"

export const getPost = (opt) => {
  switch (opt) {
    case "anime":
      return ANIME
    case "videojuegos":
      return Videojuegos
    case "viajes":
      return Viajes
    default:
      return defaultPosts
  }
}

const ANIME = graphql`
query {
  allWpPost(
    limit: 5
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "anime"}}}}}
    sort: {order: DESC, fields: date}
  ) {
    nodes {
      slug
      comments {
        nodes {
          content
        }
      }
      tags {
        nodes {
          slug
          name
        }
      }
      title
      featuredImage {
        node {
          uri
          title
          sourceUrl
        }
      }
    }
  }
}
`

const Videojuegos = graphql`
query {
  allWpPost(
    limit: 5
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "videojuegos"}}}}}
    sort: {order: DESC, fields: date}
  ) {
    nodes {
      slug
      comments {
        nodes {
          content
        }
      }
      tags {
        nodes {
          slug
          name
        }
      }
      title
      featuredImage {
        node {
          uri
          title
          sourceUrl
        }
      }
    }
  }
}
`

const Viajes = graphql`
query {
  allWpPost(
    limit: 5
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "viajes"}}}}}
    sort: {order: DESC, fields: date}
  ) {
    nodes {
      slug
      comments {
        nodes {
          content
        }
      }
      tags {
        nodes {
          slug
          name
        }
      }
      title
      featuredImage {
        node {
          uri
          title
          sourceUrl
        }
      }
    }
  }
}
`

const defaultPosts = graphql`
query {
  allWpPost(limit: 3, sort: {order: DESC, fields: date}) {
    nodes {
      slug
      comments {
        nodes {
          content
        }
      }
      tags {
        nodes {
          slug
          name
        }
      }
      title
      featuredImage {
        node {
          uri
          title
          sourceUrl
        }
      }
    }
  }
}
`