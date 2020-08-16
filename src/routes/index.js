import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Header from '../components/Header';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import Feed from '../pages/Feed';

class Routes extends Component {
  render() {
    const { history } = this.props;
    return (
      <HashRouter>
        <Header history={history} />
        <Switch>
          <Route exact path="/" render={() => <LogIn />} />
          <Route path="/sign-up" render={() => <SignUp />} />
          <Route path="/feed" render={() => <Feed />} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Routes;
