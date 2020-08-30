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
  Dialog,
  List,
  ListItem,
  ListItemText,
  Divider,
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
import { Link } from 'react-router-dom';

class FeedCard extends Component {
  constructor() {
    super();

    this.state = {
      feedMoreDialog: false,
    };

    this.handleDialog = this.handleDialog.bind(this);
  }
  handleDialog() {
    this.setState({
      feedMoreDialog: !this.state.feedMoreDialog,
    });
  }
  render() {
    const { classes } = this.props;
    const { feedMoreDialog } = this.state;

    return feedData.map((data, i) => (
      <Card className={classes.feedCard} key={i}>
        <FeedHeader
          classes={classes}
          avatarUrl={data.avatarUrl}
          username={data.username}
          location={data.location}
          handleDialog={this.handleDialog}
          feedMoreDialog={feedMoreDialog}
        />
        <FeedImages classes={classes} imagesPosted={data.imagesPosted} />
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
          <FeedLikes classes={classes} likers={data.likes} />
          <FeedCaption username={data.username} caption={data.caption} />
          <FeedComments classes={classes} comments={data.comments} />
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

const FeedHeader = (props) => {
  const {
    classes,
    avatarUrl,
    username,
    location,
    handleDialog,
    feedMoreDialog,
  } = props;
  const moreRedItems = ['Report Inappropriate', 'Unfollow'];
  const moreItems = ['Go to post', 'Share', 'Copy Link', 'Embed'];
  return (
    <>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label="settings" onClick={() => handleDialog()}>
            <MoreHoriz />
          </IconButton>
        }
        title={
          <Typography variant="body1" color="primary">
            <strong>{username}</strong>
          </Typography>
        }
        subheader={
          <Typography variant="caption" color="primary">
            {location}
          </Typography>
        }
      />
      <Dialog
        onClose={() => handleDialog()}
        aria-labelledby="simple-dialog-title"
        open={feedMoreDialog}
      >
        <List>
          {moreRedItems.map((list, i) => (
            <>
              <ListItem key={i} button>
                <ListItemText
                  className={classNames(classes.redItems, classes.moreItems)}
                >
                  <strong>{list}</strong>
                </ListItemText>
              </ListItem>
              <Divider />
            </>
          ))}
          {moreItems.map((list, i) => (
            <>
              <ListItem key={i} button>
                <ListItemText className={classes.moreItems}>
                  {list}
                </ListItemText>
              </ListItem>
              <Divider />
            </>
          ))}
          <ListItem button onClick={() => handleDialog()}>
            <ListItemText className={classes.moreItems}>Cancel</ListItemText>
          </ListItem>
        </List>
      </Dialog>
    </>
  );
};

const FeedImages = (props) => {
  const { classes, imagesPosted } = props;

  return (
    <>
      {imagesPosted.length !== 1 ? (
        <Carousel
          activeIndicatorProps={{ className: classes.inactiveIndicators }}
          indicatorProps={{ className: classes.indicator }}
          autoPlay={false}
          animation="slide"
          strictIndexing
          navButtonsAlwaysVisible
          startAt={0}
        >
          {imagesPosted.map((image, i) => (
            <Paper key={i} className={classes.carouselPaper}>
              <img src={image} alt={i} className={classes.carouselImage} />
            </Paper>
          ))}
        </Carousel>
      ) : (
        <Paper
          className={classNames(classes.carouselPaper, classes.singleImage)}
        >
          <img
            src={imagesPosted[0]}
            alt="0"
            className={classes.carouselImage}
          />
        </Paper>
      )}
    </>
  );
};

const FeedLikes = (props) => {
  const { classes, likers } = props;
  const { username, avatarUrl } = likers.length !== 0 && likers[0];
  let likersCount = likers.length - 1;
  return (
    <div className={classes.feedLikesContainer}>
      {likers.length !== 0 && (
        <>
          <Avatar src={avatarUrl} className={classes.feedLikesAvatar} />
          <Typography
            variant="body2"
            color="primary"
            className={classes.feedLikesLabel}
          >
            {likers.length > 1 ? (
              <>
                Liked by <strong>{username}</strong> and{' '}
                <strong>{likersCount} others</strong>
              </>
            ) : (
              <>
                Liked by <strong>{username}</strong>
              </>
            )}
          </Typography>
        </>
      )}
    </div>
  );
};

const FeedCaption = (props) => {
  const { username, caption } = props;
  return (
    <Typography variant="body2" color="primary">
      <strong>{username}</strong> {caption}
    </Typography>
  );
};

const FeedComments = (props) => {
  const { classes, comments } = props;
  return (
    <>
      {comments.length > 2 && (
        <Link to="/" className={classes.viewCommentButton}>
          <Typography variant="body2" color="textSecondary">
            View all {comments.length} comments
          </Typography>
        </Link>
      )}
      {comments &&
        comments.map((comment, i) => {
          return (
            <>
              {i <= 2 ? (
                <Typography variant="body2" color="primary">
                  <strong>{comment.username}</strong> {comment.comment}
                </Typography>
              ) : null}
            </>
          );
        })}
    </>
  );
};

export default withStyles(styles)(FeedCard);
