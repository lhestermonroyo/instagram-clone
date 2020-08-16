import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import { styles } from './styles';
import { Facebook } from '@material-ui/icons';

const LogInWithFbButton = (props) => {
  const { classes } = props;
  return (
    <Button fullWidth className={classes.button}>
      <Facebook className={classes.icon} />
      Log in with Facebook
    </Button>
  );
};

export default withStyles(styles)(LogInWithFbButton);
