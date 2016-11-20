import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deletePin, fetchBoard } from '../actions/index';
import CardDisplay from '../components/card_display';

class PinBoard extends Component {

  constructor(props) {
    super(props);
    this.delPin = this.delPin.bind(this);
  }

  componentWillMount() {
    this.props.fetchBoard();
  }

  delPin(idx) {
    this.props.deletePin(this.props.pinboard.board[idx].id);
  }

  render() {
    if (!this.props.pinboard.board || this.props.pinboard.board.length < 1) {
      return (
        <div className="emptymsg">No Pins Found</div>
      );
    }
    return (
      <div className="pinboard">
        <CardDisplay
          booksToCards={this.props.pinboard.board}
          funcToCards={this.delPin}
          iconButton="fa fa-trash-o"
          textButton="Delete"
        />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deletePin, fetchBoard }, dispatch);
}

function mapStateToProps(state) {
  return { pinboard: state.board };
}

export default connect(mapStateToProps, mapDispatchToProps)(PinBoard);
