import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.items.map(book => {
      return (
        <div
          className="col-xs-6 col-sm-4 col-lg-3 bookContainer "
          key={book.id}
          onClick={() => this.props.selectBook(book)}
        >
          <div className="thumbnail">
            <img src={book.volumeInfo.imageLinks.thumbnail} />
            <div className="caption">
              <h3>{book.volumeInfo.title}</h3>
              <p className="flex-text text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore, vel, quia. Non nostrum, consectetur ipsum doloribus enim
                maiores a laudantium, odio vel blanditiis id ea dolorum expedita
                fugit incidunt commodi.
              </p>
              <p>
                <a className="btn btn-primary" href="#">
                  Link
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <div className="flex-row row">{this.renderList()}</div>
        {/* <ul className="list-group col-sm-4">{this.renderList()}</ul> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList

  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the BookList container

function mapDispatchToProps(dispatch) {
  // Whenever Selectbook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it need to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
