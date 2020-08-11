import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';

class Routes extends Component {
  render() {
    const { history } = this.props;
    return (
      <BrowserRouter>
        <Header history={history} />
        <Switch>
          <Route exact path="/" render={() => <LogIn />} />
          <Route path="/sign-up" render={() => <SignUp />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
