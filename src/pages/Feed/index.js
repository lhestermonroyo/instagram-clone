import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import FeedCard from '../../components/FeedCard';
import FeedProfile from '../../components/FeedProfile';
import FeedSuggestions from '../../components/FeedSuggestions';

export class Feed extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <FeedCard />
        </Grid>
        <Grid item xs={4}>
          <FeedProfile />
          <FeedSuggestions />
        </Grid>
      </Grid>
    );
  }
}

export default Feed;
