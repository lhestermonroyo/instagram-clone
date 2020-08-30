import React, { Component } from 'react';
import { withStyles, Grid } from '@material-ui/core';
import FeedCard from '../../components/FeedCard';
import FeedProfile from '../../components/FeedProfile';
import FeedSuggestions from '../../components/FeedSuggestions';
import FeedFooter from '../../components/FeedFooter';
import { styles } from './styles';

class Feed extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <FeedCard />
        </Grid>
        <Grid item xs={4} className={classes.fixedColumn}>
          <FeedProfile />
          <FeedSuggestions />
          <FeedFooter />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Feed);
