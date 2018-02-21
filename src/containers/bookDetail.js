import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    console.log(this.props);
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }
    return (
      <div className="card bookContainer bookDetail">
        {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
        <div className="card-block">
          <h4 className="card-title">Details for:{this.props.book.volumeInfo.title}</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          {/* <li className="list-group-item">Author: {this.props.book.author}</li>
          <li className="list-group-item">Pages: {this.props.book.pages}</li> */}
          {/* <li className="list-group-item">Vestibulum at eros</li> */}
        </ul>
        <div className="card-block">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    );
  }
}

function mapSTateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapSTateToProps)(BookDetail);
