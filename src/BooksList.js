import React, { Component } from "react";

class BooksList extends Component {
  //book top: in charge of displaying thumbnail for each book
  //book shelf changer: controlled component which will handle the input from user when changing the state of the books
  //book title: displays the name of the book calling the title property
  //book authors: displays the name of book's author calling the authors property

  render() {
    let book = this.props.book;
    let displayThumbnail = {
      width: 125,
      height: 178,
      backgroundImage: book.imageLinks
        ? `url("${book.imageLinks.smallThumbnail}")`
        : ""
    };

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={displayThumbnail} />
          />

          <div className="book-shelf-changer">
            <select
              value={this.props.currentShelf}
              onChange={event =>
                this.props.moveShelf(this.props.book, event.target.value)
              }
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">What I'm reading</option>
              <option value="wantToRead">What I'll read next</option>
              <option value="read">Already read that...</option>
              <option value="none">Get rid of this</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default BooksList;
