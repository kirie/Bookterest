import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addPin, getBooks, addNotification} from '../actions/index';

class BookList extends Component {
  
  componentWillMount(){
    if(this.props.books.booklist.length < 1){
      this.props.getBooks('espresso');
    }
  }

  savePin(idx){
    if(!this.props.authenticated) {
      this.props.addNotification('Sign in or create an account to save a book.', 'info');
    }
    else if((this.props.board.board.filter(obj => {return obj.id === this.props.books.booklist[idx].id})).length) {
      this.props.addNotification('Oops! Looks like a duplicate', 'info');
    }
    else {
      this.props.addPin(this.props.books.booklist[idx]);
    }
  }

  renderBook (eachBook, idx) {
    const NO_IMG = 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';
    const id = eachBook.id;
    const title = eachBook.volumeInfo.title;
    const authors = eachBook.volumeInfo.authors ? 
      eachBook.volumeInfo.authors.reduce((author1, author2) => {
        return author1 + ', ' + author2;
      }) : 'Unknown Author';
    const description = eachBook.searchInfo ? eachBook.searchInfo.textSnippet : "No Description found";
    const thumbnail = eachBook.volumeInfo.imageLinks ? eachBook.volumeInfo.imageLinks.thumbnail : NO_IMG;
    const webreaderlink = eachBook.accessInfo.webReaderLink ? eachBook.accessInfo.webReaderLink : '//:0';
    const indx = idx;
    
    return (
      <div className="card" key={id}>
       <button className="btn btn-secondary pinbutton" value={indx} onClick={event => this.savePin(event.target.value)}><i className="fa fa-thumb-tack"></i> Save</button>
        <img className="card-img-top" src={thumbnail} />
          <div className="card-block">
            <h5 className="card-title">{title}</h5>
            <h6>{authors}</h6>
            <p className="card-text">
              <small>
                {description}
              </small>
            </p>
            <a href={webreaderlink} target="_blank"><button className="btn btn-secondary viewbutton">View</button></a>
          </div>
      </div>
    )
  }

  render () {
    if(!this.props.books.booklist){
      return (
        <div className="emptymsg"></div>
      )
    }
    return (
      <div className="card-columns">
          {this.props.books.booklist.map(this.renderBook, this)}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addPin, getBooks, addNotification}, dispatch);
}

function mapStateToProps(state){
  return {books: state.books, board: state.board, authenticated: state.auth.authenticated};
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
