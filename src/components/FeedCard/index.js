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
  MoreVert,
  SendOutlined,
  FavoriteBorderOutlined,
  ChatBubbleOutlineOutlined,
  BookmarkBorderOutlined,
} from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';
import classNames from 'classnames';
import TimeAgo from 'react-timeago';
import AvatarImg from '../../resource/avatar.png';
import Img1 from '../../resource/1.png';
import Img2 from '../../resource/2.png';
import Img3 from '../../resource/3.png';
import Img4 from '../../resource/4.png';
import Img5 from '../../resource/5.png';
import { styles } from './styles';

const dummyData = [
  {
    avatar: AvatarImg,
    username: 'lhest.art',
    location: 'Iloilo City',
    ownPost: true,
    imagesPosted: [Img1, Img2, Img3, Img4, Img5],
    timePosted: '2019-11-22 09:55:45',
    caption: 'This is my first ever post.',
    likes: ['John Doe', 'Mark Doe', 'Shawn Doe'],
    comments: [
      {
        username: 'John Doe',
        comment: 'Cool!',
        timeCommented: '2021-03-02 19:16:07',
      },
      {
        username: 'Shawn Doe',
        comment: 'Damn how did you do this?!',
        timeCommented: '2020-08-28 12:36:50',
      },
    ],
  },
];

class FeedCard extends Component {
  render() {
    const { classes } = this.props;
    return dummyData.map((data, i) => (
      <Card key={i}>
        <CardHeader
          avatar={<Avatar src={data.avatar} />}
          action={
            <IconButton aria-label="settings">
              <MoreVert />
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
                    <Button
                      className={classes.commentSubmitButton}
                      aria-label="Toggle password visibility"
                    >
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
