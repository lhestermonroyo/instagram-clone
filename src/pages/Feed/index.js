import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';
import FeedCard from '../../components/FeedCard';


export class Feed extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <FeedCard />
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    );
  }
}

export default Feed;
