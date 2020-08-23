import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { Container } from '@material-ui/core';

const PrivateContainer = (props) => {
  const { children, history } = props;
  return (
    <>
      <Header history={history} />
      <Container style={{ marginTop: '5em' }} component="main" maxWidth="md">
        {children}
      </Container>
    </>
  );
};

PrivateContainer.propTypes = {
  history: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PrivateContainer;
