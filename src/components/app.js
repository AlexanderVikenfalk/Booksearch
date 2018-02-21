import React, { Component } from "react";

import BookList from "../containers/bookList";
import BookDetail from "../containers/bookDetail";
import BookSearch from '../containers/bookSearch'

export default class App extends Component {
  render() {
    return (
      <div>
        <BookSearch />
        <BookDetail />
        <BookList />
      </div>
    );
  }
}
