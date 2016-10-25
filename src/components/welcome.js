import React, { Component } from 'react';
import BookSearch from '../containers/book_search';
import BookList from '../containers/book_list';

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <BookSearch />
        <BookList />
      </div>
    );
  }
}
