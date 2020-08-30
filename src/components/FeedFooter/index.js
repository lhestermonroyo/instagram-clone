import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { styles } from './styles';
import { Link } from 'react-router-dom';

class FeedFooter extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.feedFooter}>
        <Typography variant="caption" color="textSecondary">
          <Link className={classes.footerLink}>About</Link> &bull;{' '}
          <Link className={classes.footerLink}>Help</Link> &bull;{' '}
          <Link className={classes.footerLink}>Press</Link> &bull;{' '}
          <Link className={classes.footerLink}>API</Link> &bull;{' '}
          <Link className={classes.footerLink}>Jobs</Link> &bull;{' '}
          <Link className={classes.footerLink}>Privacy</Link> &bull;{' '}
          <Link className={classes.footerLink}>Terms</Link> &bull;{' '}
          <Link className={classes.footerLink}>Locations</Link> &bull;{' '}
          <Link className={classes.footerLink}>Top Accounts</Link> &bull;{' '}
          <Link className={classes.footerLink}>Hashtags</Link> &bull;{' '}
          <Link className={classes.footerLink}>Language</Link>
        </Typography>
        <Typography
          variant="caption"
          color="textSecondary"
          className={classes.footerCpLabel}
        >
          &copy; {new Date().getFullYear()} Instagram - Clone from Facebook
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(FeedFooter);
