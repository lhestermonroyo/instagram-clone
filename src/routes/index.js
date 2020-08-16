import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import PrivateContainer from './PrivateContainer';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import Feed from '../pages/Feed';
import PrivateRoute from './PrivateRoute';

const privateRoutes = [
  { path: '/feed', container: PrivateContainer, component: Feed },
];

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => <LogIn />} />
          <Route path="/sign-up" render={() => <SignUp />} />
          {privateRoutes.map(({ path, container, component }) => (
            <PrivateRoute
              path={path}
              container={container}
              component={component}
            />
          ))}
        </Switch>
      </HashRouter>
    );
  }
}

export default Routes;
