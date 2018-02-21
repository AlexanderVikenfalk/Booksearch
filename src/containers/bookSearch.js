import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addBook, fetchBook } from "../actions/index";

class BookAdd extends Component {
  state = {
    title: ""
  };

  onInputChangeTerm(event) {
    this.setState({ title: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchBook(this.state.title);
  }

  render() {
    return (
      <div className="card bookContainer">
          <form
            className="form-horizontal "
            role="form"
            onSubmit={event => this.onFormSubmit(event)}
          >
            <h4>Search Book:</h4>
            <div className="form-group">
              <label htmlFor="addBookTitle">Title</label>
              <input
                placeholder="Add a book title"
                id="addBookTitle"
                className="form-control"
                value={this.state.title}
                onChange={event => this.onInputChangeTerm(event)}
              />
            </div>
            {/* <div className="form-group">
              <label for="addAuthor">Author</label>
              <input
                placeholder="Add author name"
                id="addAuthor"
                className="form-control"
                value={this.state.author}
                onChange={event => this.onInputChangeAuthor(event)}
              />
            </div>
            <div className="form-group">
              <label for="addBookPages">Pages</label>
              <input
                placeholder="Add number of pages"
                id="addBookPages"
                className="form-control"
                value={this.state.pages}
                type="number"
                onChange={event => this.onInputChangePages(event)}
              />
            </div> */}
            {/* <span className="input-group-btn"> */}
            <button
              className="btn btn-primary btn-lg center-block"
              type="submit"
            >
              Submit
            </button>
            {/* </span> */}
          </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBook }, dispatch);
}

export default connect(null, mapDispatchToProps)(BookAdd);
