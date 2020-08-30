import React, { Component } from 'react';
import {
  Card,
  Avatar,
  Typography,
  Paper,
  withStyles,
  CardHeader,
  IconButton,
  CardContent,
  CardActions,
  FormControl,
  InputAdornment,
  TextField,
  Button,
} from '@material-ui/core';
import {
  MoreHoriz,
  SendOutlined,
  FavoriteBorderOutlined,
  ChatBubbleOutlineOutlined,
  BookmarkBorderOutlined,
} from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';
import classNames from 'classnames';
import TimeAgo from 'react-timeago';
import { styles } from './styles';
import { feedData } from '../../data';

class FeedCard extends Component {
  render() {
    const { classes } = this.props;
    return feedData.map((data, i) => (
      <Card className={classes.feedCard} key={i}>
        <CardHeader
          avatar={<Avatar src={data.avatarUrl} />}
          action={
            <IconButton aria-label="settings">
              <MoreHoriz />
            </IconButton>
          }
          title={
            <Typography variant="body1" color="textPrimary">
              <strong>{data.username}</strong>
            </Typography>
          }
          subheader={
            <Typography variant="body2" color="textPrimary">
              {data.location}
            </Typography>
          }
        />
        <Carousel
          activeIndicatorProps={{ className: classes.inactiveIndicators }}
          indicatorProps={{ className: classes.indicator }}
          autoPlay={false}
          animation="slide"
          strictIndexing
          navButtonsAlwaysVisible
          startAt={0}
        >
          {data.imagesPosted.map((image, i) => (
            <Paper key={i} className={classes.carouselPaper}>
              <img src={image} alt={i} className={classes.carouselImage} />
            </Paper>
          ))}
        </Carousel>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton className={classes.cardActionButtons} aria-label="like">
            <FavoriteBorderOutlined
              color="primary"
              className={classes.buttonIcons}
            />
          </IconButton>
          <IconButton
            className={classes.cardActionButtons}
            aria-label="comment"
          >
            <ChatBubbleOutlineOutlined
              color="primary"
              className={classes.buttonIcons}
            />
          </IconButton>
          <IconButton className={classes.cardActionButtons} aria-label="send">
            <SendOutlined color="primary" className={classes.buttonIcons} />
          </IconButton>
        </CardActions>
        <IconButton
          className={classNames(
            classes.cardActionButtons,
            classes.bookMarkButton
          )}
        >
          <BookmarkBorderOutlined
            color="primary"
            className={classes.buttonIcons}
          />
        </IconButton>
        <CardContent>
          <Typography variant="body2" color="textPrimary">
            <strong>{data.username}</strong> {data.caption}
          </Typography>
          <Typography
            className={classes.timePostedLabel}
            variant="button"
            color="textSecondary"
          >
            <TimeAgo date={data.timePosted} />
          </Typography>
        </CardContent>
        <CardActions className={classes.cardComment}>
          <FormControl className={classes.formcontrol}>
            <TextField
              type="text"
              onChange={this.handleChange}
              name="comment"
              variant="outlined"
              size="small"
              placeholder="Add a comment..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button className={classes.commentSubmitButton}>
                      Post
                    </Button>
                  </InputAdornment>
                ),
              }}
              margin="normal"
              fullWidth
            />
          </FormControl>
        </CardActions>
      </Card>
    ));
  }
}

export default withStyles(styles)(FeedCard);
