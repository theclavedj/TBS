//component MyReads will handle the mainpage UI, rendering the three shelfs and the search icon
import React, { Component } from "react";
import BooksList from "./BooksList";
import { Link } from "react-router-dom";

class MyReads extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1> {/*main shelf, title myreads*/}
          <p> Keep track of your favorite books</p>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">What I'm reading</h2> {/*first shelf, title what im reading*/}
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(book => book.shelf === "currentlyReading") //access props of the books and filter them to match currentreading component state
                    .map(book => ( //create new array of books and display them into booklist shelf
                      <li key={book.id}>
                        <BooksList
                          book={book}
                          currentShelf={book.shelf}
                          moveShelf={this.props.moveShelf}
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">What I'll read next</h2>
              {/*second shelf, title what ill read next*/}
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books //access props of the books and filter them to match currentreading component state
                    .filter(book => book.shelf === "wantToRead")
                    .map((
                      book //create new array of books and display them into booklist shelf
                    ) => (
                      <li key={book.id}>
                        <BooksList
                          book={book}
                          currentShelf={book.shelf}
                          moveShelf={this.props.moveShelf}
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Already read that...</h2>
              {/*third shelf, title already read that*/}
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books //access props of the books and filter them to match currentreading component state
                    .filter(book => book.shelf === "read")
                    .map((
                      book //create new array of books and display them into booklist shelf
                    ) => (
                      <li key={book.id}>
                        <BooksList
                          book={book}
                          currentShelf={book.shelf}
                          moveShelf={this.props.moveShelf}
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="open-search">
          {/*search button, should redirect to search page*/}
          <Link to="/search">
            {" "}
            {/*added link component to create routing and redirect to /search once the icon is clicked*/}
            <button onClick={() => this.setState({ showSearchPage: true })}>
              Add a book
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MyReads;
