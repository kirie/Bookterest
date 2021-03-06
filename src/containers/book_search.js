import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { getBooks } from '../actions/index';

class BookSearch extends Component {

  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.bookfind = _.debounce(this.props.getBooks, 300);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    this.bookfind(event.target.value);
  }

  render() {
    return (
      <div id="booksearchbar">
        <form onSubmit={event => event.preventDefault()} className="input-group">
          <input className="form-control booksearchinput" value={this.state.term} onChange={this.onInputChange} placeholder="Search for a Book (US region)" />
          <span className="input-group-addon">
            <i className="fa fa-search" />
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBooks }, dispatch);
}

export default connect(null, mapDispatchToProps)(BookSearch);
