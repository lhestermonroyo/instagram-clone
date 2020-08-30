import React, { Component } from 'react';
import { withStyles, Card, Typography } from '@material-ui/core';
import { styles } from './styles';

class Inbox extends Component {
  render() {
    return (
      <>
        <Card>
          <Typography>Test</Typography>
        </Card>
      </>
    );
  }
}

export default withStyles(styles)(Inbox);
