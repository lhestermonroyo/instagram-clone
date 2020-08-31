import React, { Component } from 'react';
import {
  withStyles,
  Card,
  Avatar,
  Typography,
  Grid,
  CardHeader,
  IconButton,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
  Button,
} from '@material-ui/core';
import { Create, SendOutlined } from '@material-ui/icons';
import { styles } from './styles';
import { inboxData, inboxData2 } from '../../data';
import TimeAgo from 'react-timeago';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

class Inbox extends Component {
  constructor() {
    super();

    this.state = {
      tabValue: 0,
    };

    this.handleTab = this.handleTab.bind(this);
  }
  handleTab(e, tabValue) {
    console.log(e, tabValue);
    this.setState({
      tabValue,
    });
  }
  render() {
    const { classes } = this.props;
    const { tabValue } = this.state;
    return (
      <>
        <Card className={classes.inboxCard}>
          <Grid container>
            <Grid item xs={5} className={classes.inboxListContainer}>
              <CardHeader
                className={classes.inboxListHeader}
                title={
                  <Typography variant="body1" align="center">
                    <strong>Direct</strong>
                  </Typography>
                }
                action={
                  <IconButton className={classes.actionButton}>
                    <Create color="primary" />
                  </IconButton>
                }
              />
              <div className={classes.root}>
                <Tabs
                  value={tabValue}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={this.handleTab}
                >
                  <Tab
                    className={{ root: classes.inboxTab }}
                    label="Primary"
                    {...a11yProps(0)}
                  />
                  <Tab
                    className={{ root: classes.inboxTab }}
                    label="General"
                    {...a11yProps(0)}
                  />
                </Tabs>
              </div>
              <TabPanel value={tabValue} index={0}>
                <InboxPrimaryList classes={classes} />
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <InboxGeneralList classes={classes} />
              </TabPanel>
            </Grid>
            <Grid item xs={7}>
              <div className={classes.inboxDefaultScreen}>
                <div>
                  <div className={classes.circle}>
                    <SendOutlined className={classes.sendIcon} />
                  </div>
                </div>
                <Typography variant="h6">Your Messages</Typography>
                <Typography variant="body2" color="textSecondary">
                  Send private photos and messages to a friend or group.
                </Typography>
                <Button className={classes.sendMessageButton} variant="contained" color="secondary">
                  Send Message
                </Button>
              </div>
            </Grid>
          </Grid>
        </Card>
      </>
    );
  }
}

const InboxPrimaryList = (props) => {
  const { classes } = props;
  return (
    <List className={classes.inboxPrimaryList}>
      {inboxData.map((data, i) => {
        return (
          <ListItem button alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={data.username} src={data.avatarUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={data.username}
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                >
                  <TimeAgo date={data.timeActive} />
                </Typography>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
};

const InboxGeneralList = (props) => {
  const { classes } = props;
  return (
    <List className={classes.inboxGeneralList}>
      {inboxData2.map((data, i) => {
        return (
          <ListItem button alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={data.username} src={data.avatarUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={data.username}
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                >
                  <TimeAgo date={data.timeActive} />
                </Typography>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default withStyles(styles)(Inbox);
