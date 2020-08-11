import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { history } = this.props;
    const { pathname } = history.location;
    return (
      <>{pathname !== '/' || (pathname === '/sign-up' && <h1>Header</h1>)}</>
    );
  }
}

export default Header;
