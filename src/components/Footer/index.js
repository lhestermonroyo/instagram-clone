import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { styles } from './styles';

const Footer = (props) => {
  const { classes } = props;
  return (
    <div className={classes.footerContainer}>
      <Typography
        className={classes.footerLabel}
        align="center"
        variant="body2"
      >
        &copy; 2020 Instagram from Facebook
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Footer);
