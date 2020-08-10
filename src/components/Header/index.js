import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { history } = this.props;
    return <>{history.location.pathname !== '/' && <h1>Header</h1>}</>;
  }
}

export default Header;
