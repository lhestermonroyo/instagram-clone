import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { Container } from '@material-ui/core';

const PrivateContainer = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Container component="main" maxWidth="md">
        {children}
      </Container>
    </>
  );
};

PrivateContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PrivateContainer;
