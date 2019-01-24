import React, { Component } from "react";

class BooksList extends Component {
  
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">What I'm reading</option>
          <option value="wantToRead">What I'll read next</option>
          <option value="read">Already read that...</option>
          <option value="none">Get rid of this</option>
        </div>
      </div>
    );
  }
}

export default BooksList;
