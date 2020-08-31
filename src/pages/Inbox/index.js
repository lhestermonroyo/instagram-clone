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
} from '@material-ui/core';
import { Create } from '@material-ui/icons';
import { styles } from './styles';
import { inboxData } from '../../data';
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
            <Grid item xs={4} className={classes.inboxListContainer}>
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
              <InboxList classes={classes} />
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </Card>
      </>
    );
  }
}

const InboxList = (props) => {
  const { classes } = props;
  return (
    <List className={classes.inboxList}>
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

export default withStyles(styles)(Inbox);
