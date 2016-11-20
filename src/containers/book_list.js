import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPin, getBooks, addNotification } from '../actions/index';
import CardDisplay from '../components/card_display';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.savePin = this.savePin.bind(this);
  }
  componentWillMount() {
    if (this.props.books.booklist.length < 1) {
      this.props.getBooks('espresso');
    }
  }

  savePin(idx) {
    if (!this.props.authenticated) {
      this.props.addNotification('Sign in or create an account to save a book.', 'info');
    }
    else if ((this.props.board.board.filter((obj) => { return obj.id === this.props.books.booklist[idx].id})).length) {
      this.props.addNotification('Oops! Looks like a duplicate', 'info');
    }
    else {
      this.props.addPin(this.props.books.booklist[idx]);
    }
  }

  render() {
    if (!this.props.books.booklist) {
      return (
        <div className="emptymsg" />
      );
    }
    return (
      <div>
        <CardDisplay
          booksToCards={this.props.books.booklist}
          funcToCards={this.savePin}
          iconButton="fa fa-thumb-tack"
          textButton="Save"
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPin, getBooks, addNotification }, dispatch);
}

function mapStateToProps(state) {
  return { books: state.books, board: state.board, authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
