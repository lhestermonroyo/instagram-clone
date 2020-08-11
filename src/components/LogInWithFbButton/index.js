import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import fbIcon from '../../resource/fb-icon.svg';
import { styles } from './styles';

const LogInWithFbButton = (props) => {
  const { classes } = props;
  return (
    <Button fullWidth className={classes.button}>
      <img src={fbIcon} className={classes.fbIcon} alt="fb-icon" />
      Log in with Facebook
    </Button>
  );
};

export default withStyles(styles)(LogInWithFbButton);
