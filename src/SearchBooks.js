//this component is responsible for rendering searchfield UI and should also retreives new lists of books when the user types in the search field
import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BooksList from "./BooksList";
import "./Search.css";

class SearchBooks extends Component {
  state = {
    //controlled component for the search input, as it will allow instant validation
    query: "", //empty object which will be filled by updateQuery statement
    bookRequest: [] //empty object which will receive a new array of data from backend by updateBookRequest statement
  };

  updateQuery = query => {
    //update method as the form of truth lives in the component, from classroom this was applied to ListContacts.js project
    this.setState({ query: query }); //deleted trim as doesn't allow multiple words search
    this.updateBookRequest(query); //error updateBookRequest is not a function ->
  };

  updateBookRequest = query => {
    //updateBookRequest function
    if (query) {
      BooksAPI.search(query).then(bookRequest => {
        //when receiving input from user, search in booksAPI and return an object
        if (bookRequest.error) {
          //if there is no match, return an empty array
          this.setState({ bookRequest: [] });
        } else {
          //if there is no error, create a new state which matches user input
          this.setState({ bookRequest: bookRequest });
        }
      });
    } else {
      this.setState({ bookRequest: [] }); //if the user deletes any input, do not show any book, returning to original value
    }
  };

  render() {
    return (
      <div className="search-books">
        {" "}
        {/*rendering the searchbox field*/}
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            {" "}
            {/*back arrow to go to main page*/}
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              /*below user will input any query*/
              placeholder="Search by title or author"
              /*below the value will be the state of what the user wrote*/
              value={this.state.query}
              /*on change the event listener invokes updateQuery, then calls setState*/
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-results">
          <ol className="books-list">
            {this.state.bookRequest.map(bookRequest => {
              let shelf = "move";
              return (
                //create new array of books that match user input and display them into searchbooks UI
                <ol key={bookRequest.id}>
                  <BooksList
                    book={bookRequest}
                    currentShelf={shelf}
                    moveShelf={this.props.moveShelf}
                  />
                </ol>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
