import React from 'react';
import {
  withStyles,
  Grid,
  Avatar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import { profileData } from '../../data';
import { styles } from './styles';

const ProfileDetails = (props) => {
  const { classes } = props;
  return (
    <Grid container spacing={3} className={classes.profileDetails}>
      <Grid item xs={4} className={classes.profileAvatarContainer}>
        <Avatar src={profileData.avatarUrl} className={classes.profileAvatar} />
      </Grid>
      <Grid item xs={8} className={classes.profileDetailsContainer}>
        <div className={classes.profileUsernameContainer}>
          <Typography variant="h4" className={classes.profileUsername}>
            {profileData.username}
          </Typography>
          <Button variant="outlined">Edit Profile</Button>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
        <Typography variant="body1">
          <strong>{profileData.fullname}</strong>
        </Typography>
        <Typography variant="body1">{profileData.bio}</Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ProfileDetails);
