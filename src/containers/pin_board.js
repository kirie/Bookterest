import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deletePin, fetchBoard } from '../actions/index';

class PinBoard extends Component {
  componentWillMount() {
    this.props.fetchBoard();
  }

  delPin(idx){
    this.props.deletePin(this.props.pinboard.board[idx].id);
  }

  renderBoard (eachBook, idx) {
    const NO_IMG = 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';
    const id = eachBook.id;
    const title = eachBook.volumeInfo.title;
    const authors = eachBook.volumeInfo.authors ? 
      eachBook.volumeInfo.authors.reduce((author1, author2) => {
        return `${author1}, ${author2}`;
      }) : 'Unknown Author';
    const description = eachBook.searchInfo ? eachBook.searchInfo.textSnippet : "No Description found";
    const thumbnail = eachBook.volumeInfo.imageLinks ? eachBook.volumeInfo.imageLinks.thumbnail : NO_IMG;
    const webreaderlink = eachBook.accessInfo.webReaderLink ? eachBook.accessInfo.webReaderLink : '//:0';
    const indx = idx;
    return (
      <div className="card" key={id}>
       <button className="btn btn-secondary pinbutton" value={indx} onClick={event => this.delPin(event.target.value)}><i className="fa fa-trash-o"></i> Delete</button>
        <img className="card-img-top" src={thumbnail} />
          <div className="card-block">
            <h5 className="card-title">{title}</h5>
            <h6>{authors}</h6>
            <p className="card-text">
              <small>
                {description}
              </small>
            </p>
            <a href={webreaderlink} target="_blank" rel="noopener noreferrer"><button className="btn btn-secondary viewbutton">View</button></a>
          </div>
      </div>
    )
  }

  render () {
    if(!this.props.pinboard.board || this.props.pinboard.board.length < 1){
      return (
        <div className="emptymsg">No Pins Found</div>
      )
    }
    return (
      <div className="card-columns pinboard">
          {this.props.pinboard.board.map(this.renderBoard, this)}
      </div>
    )
  }
};


function mapDispatchToProps(dispatch){
  return bindActionCreators({deletePin, fetchBoard}, dispatch);
}

function mapStateToProps(state){
  return {pinboard: state.board};
}

export default connect(mapStateToProps, mapDispatchToProps)(PinBoard);
