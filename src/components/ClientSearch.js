import React, { Component } from "react"
import * as JsSearch from "js-search"
import Card from '../components/Card'
class ClientSearch extends Component {
  state = {
    isLoading: true,
    searchResults: [],
    search: null,
    isError: false,
    indexByTitle: false,
    indexByAuthor: false,
    termFrequency: true,
    removeStopWords: false,
    searchQuery: "",
    selectedStrategy: "",
    selectedSanitizer: "",
  }
  /**
   * React lifecycle method that will inject the data into the state.
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.search === null) {
      const { engine } = nextProps
      return {
        indexByTitle: engine.TitleIndex,
        indexByAuthor: engine.AuthorIndex,
        termFrequency: engine.SearchByTerm,
        selectedSanitizer: engine.searchSanitizer,
        selectedStrategy: engine.indexStrategy,
      }
    }
    return null
  }
  async componentDidMount() {
    this.rebuildIndex()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.searchData()
    }
  }

  rebuildIndex = () => {
    const { books } = this.props

    var search = new JsSearch.Search("name")
    search.addIndex(["node", "slug"])
    search.addIndex(["node", "title"])
    search.addDocuments(books)
    const res = search.search(this.props.searchValue)
    this.setState({ search: search, isLoading: false, searchResults: res })
  }

  searchData = () => {
    const { search } = this.state

    const queryResult = search.search(this.props.searchValue)
    this.setState({
      searchQuery: this.props.searchValue,
      searchResults: queryResult,
    })
  }
  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    const { searchResults } = this.state
    return (
      <>
        {searchResults.length > 0 && (
          <div>
            {searchResults.map(({ node }, key) => (
              <Card key={key} node={node} />
            ))}
            {/* <Pagination pageContext={pageContext} /> */}
          </div>
        )}
      </>
    )
  }
}
export default ClientSearch
