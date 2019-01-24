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
    BooksAPI.getAll().then(books => {
      //fetching the books from booksAPI and save them into the array called books
      this.setState({ books });
    });
  }

  moveShelf = (book, shelf) => {
    //update the shelfs by requesting update from backend server, getting the new books and shelfs
    BooksAPI.update(book, shelf).then(() => { //update returns a promise, and then send us the book from server and the shelf state
      BooksAPI.getAll().then(books => { //Returns a Promise which resolves to a JSON object containing a collection of book objects
        this.setState({ books }); //set the state of books with the new returned object
      });
    });
  };

  render() {
    return (
    <div className="app"> {/*Expected an assignment or function call and instead saw an expression?????*/}
      {/*here we include both components (mainpage + searchpage) and render them into UI using routing to create back and forward options in the browser*/}
      {/*below we insert route to create back and forward options in the UI*/}
      <Route exact path="/"
        render={() => (
          <MyReads moveShelf={this.moveShelf} books={this.state.books}/> /*solved TypeError: Cannot read property 'filter' of undefined on myreads*/
        )}
      />

      <Route path="/search" render={() => (
        <SearchBooks moveShelf={this.moveShelf} books={this.state.books}/>
      )}
    />
  </div>
);
}
}

export default BooksApp;
