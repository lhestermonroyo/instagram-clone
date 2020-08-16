import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { path, history, container: Container, component: Component } = props;
  return (
    <Route
      path={path}
      render={() => (
        <Container history={history}>
          <Component />
        </Container>
      )}
    />
  );
};

export default PrivateRoute;
