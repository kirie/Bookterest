import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { fetchBoard } from '../actions/index';

class Header extends Component {

  componentWillMount() {
    if (this.props.authenticated) {
      this.props.fetchBoard();
    }
  }

  renderLinks() {
    if (this.props.authenticated) {
      return ([
        <li className="nav-item" key={3}>
          <Link className="nav-link" to="/pinboard">Pinned Books <small>{this.props.boardnum.length > 0 ? `(${this.props.boardnum.length})`: ''}</small></Link>
        </li>,
        <li className="nav-item" key={4}>
          <Link className="nav-link" to="/recommendations">Recommendations</Link>
        </li>,
        <li className="nav-item" key={5}>
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      ])
    }

    else {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ]
    }
  }

  render() {
    return (
      <div id="theheader">
        <nav className="navbar navbar-light">
          <Link to="/" className="navbar-brand"><img className="brandimg" alt="brand" src="../../assets/images/bookCut.png" />
          </Link>
          <ul className="nav navbar-nav">
            {this.renderLinks()}
          </ul>
        </nav>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBoard }, dispatch);
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    boardnum: state.board.board
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
