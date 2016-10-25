import React, { Component } from 'react';
import Header from '../containers/header';
import NotificationContainer from '../containers/notification_container';

export default class App extends Component {
  render() {
    return (
      <div id="border-wrapper">
        <NotificationContainer />
        <Header />
        {this.props.children}
      </div>
    );
  }
}
