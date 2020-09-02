import React, { Component } from 'react';
import { withStyles, Tabs, Tab } from '@material-ui/core';
import { styles } from './styles';
import ProfileDetails from '../../components/ProfileDetails';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      tabValue: 0,
    };

    this.handleTab = this.handleTab.bind(this);
  }
  handleTab(e, tabValue) {
    this.setState({
      tabValue,
    });
  }
  render() {
    const { classes } = this.props;
    const { tabValue } = this.state;
    return (
      <>
        <ProfileDetails />
        <div className={classes.root}>
          <Tabs
            centered
            value={tabValue}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleTab}
          >
            <Tab label="Posts" {...a11yProps(0)} />
            <Tab label="IGTV" {...a11yProps(1)} />
            <Tab label="Saved" {...a11yProps(2)} />
            <Tab label="Tagged" {...a11yProps(3)} />
          </Tabs>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Profile);
