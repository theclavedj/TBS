import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import MyReads from "./MyReads";
import SearchBooks from "./SearchBooks";

class BooksApp extends React.Component {
  state = {
    //state of the books component
    books: [], //empty array which will be filled with booksAPI when the component is mount
    bookRequest: [] //the array which is created when a search is made
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => { //fetching the books from booksAPI and save them into the array called books
      this.setState({ books });
    });
  }

  render() {
    return
    <div className="app"> {/*here we include both components (mainpage + searchpage) and render them into UI using routing to create back and forward options in the browser*/}
    {/*below we insert route to create back and forward options in the UI*/}
    <Route exact path="/"
      render={() => (
        <MyReads/>
      )}
    />

    <Route
      path="/search"
      render={() => (
        <SearchBooks/>
      )}
    />

    </div>
  }
}

export default BooksApp;
