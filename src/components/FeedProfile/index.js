import React from 'react';
import { withStyles, Typography, Avatar, CardHeader } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { styles } from './styles';
import { profileData } from '../../data';

const FeedProfile = (props) => {
  const { classes } = props;
  return (
    <CardHeader
      className={classes.profileContainer}
      avatar={
        <Link to="/profile">
          <Avatar src={profileData.avatarUrl} className={classes.avatar} />
        </Link>
      }
      title={
        <Link to="/profile" className={classes.title}>
          <Typography variant="body2" color="textPrimary">
            <strong>{profileData.username}</strong>
          </Typography>
        </Link>
      }
      subheader={
        <Typography variant="caption" color="textSecondary">
          {profileData.fullname}
        </Typography>
      }
    />
  );
};

export default withStyles(styles)(FeedProfile);
