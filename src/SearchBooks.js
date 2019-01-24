//this component is responsible for rendering searchfield UI and should also retreives new lists of books when the user types in the search field
import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchBooks extends Component {
  state = {
    //controlled component for the search input, as it will allow instant validation
    query: "", //empty object which will be filled by updateQuery statement
    bookRequest: [] //empty object which will receive a new array of data from backend by updateBookRequest statement
  };

  updateQuery = query => {
    //update method as the form of truth lives in the component, from classroom this was applied to ListContacts.js project
    this.setState({ query: query.trim() });
    this.updateBookRequest(query);
  };

  render() {
    return (
      <div className="search-books">
        {" "}
        {/*rendering the searchbox field*/}
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default SearchBooks;
