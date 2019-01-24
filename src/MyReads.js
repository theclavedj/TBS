//component MyReads will handle the mainpage UI, rendering the three shelfs and the search icon
import React, { Component } from "react";
import BooksList from "./BooksList";

class MyReads extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1> {/*main shelf, title myreads*/}
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2> {/*second shelf, title what im reading*/}
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <div className="open-search"> {/*search button, should redirect to search page*/}
                    <button
                      onClick={() => this.setState({ showSearchPage: true })}>
                      Add a book
                    </button>
                  </div>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyReads;
