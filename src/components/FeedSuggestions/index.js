import React from 'react';
import {
  withStyles,
  Typography,
  Avatar,
  CardHeader,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { styles } from './styles';
import { suggestionData } from '../../data';

const FeedSuggestions = (props) => {
  const { classes } = props;
  return (
    <>
      <Typography
        variant="body1"
        color="textSecondary"
        className={classes.suggestionContainer}
      >
        <strong>Suggestions For You</strong>
      </Typography>
      {suggestionData.map((data, i) => (
        <CardHeader
          className={classes.suggestionContainer}
          key={i}
          avatar={
            <Link to="#">
              <Avatar src={data.avatarUrl} />
            </Link>
          }
          action={<Button className={classes.followButton}>Follow</Button>}
          title={
            <Link to="#" className={classes.title}>
              <Typography variant="body2" color="textPrimary">
                <strong>{data.username}</strong>
              </Typography>
            </Link>
          }
          subheader={
            <Typography variant="caption" color="textSecondary">
              Follows you
            </Typography>
          }
        />
      ))}
    </>
  );
};

export default withStyles(styles)(FeedSuggestions);
