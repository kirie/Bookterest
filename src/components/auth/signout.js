import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {

  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div>
        Sad to see you go
        <div className="goodbye" />
      </div>
    );
  }
}

export default connect(null, actions)(Signout);
