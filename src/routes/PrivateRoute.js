import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { path, container: Container, component: Component } = props;
  return (
    <Route
      path={path}
      render={() => (
        <Container>
          <Component />
        </Container>
      )}
    />
  );
};

export default PrivateRoute;
