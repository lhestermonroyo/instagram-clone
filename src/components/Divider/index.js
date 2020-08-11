import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import { styles } from './styles';

const Divider = (props) => {
  const { classes } = props;
  return (
    <>
      <div className={classes.divider} />
      <Typography align="center" className={classes.label}>
        OR
      </Typography>
    </>
  );
};

export default withStyles(styles)(Divider);
