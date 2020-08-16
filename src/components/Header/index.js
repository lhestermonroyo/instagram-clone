import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  InputBase,
  withStyles,
} from '@material-ui/core';
import {
  Home,
  Search,
  Send,
  Explore,
  Favorite,
  AccountCircle,
} from '@material-ui/icons';
import Logo from '../Logo';
import { styles } from './styles';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const disabledPaths = ['/', '/sign-up'];
    const { history, classes } = this.props;
    const { pathname } = history.location;

    return (
      <>
        {!disabledPaths.includes(pathname) && (
          <div className={classes.root}>
            <AppBar color="primary" className={classes.appbar} position="fixed">
              <Container maxWidth="md">
                <Toolbar>
                  <div className={classes.logo}>
                    <Link to="/feed">
                      <Logo type="nav-text" />
                    </Link>
                  </div>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <Search color="primary" />
                    </div>
                    <InputBase
                      color="primary"
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </div>
                  <div className={classes.grow} />
                  <IconButton color="primary">
                    <Home />
                  </IconButton>
                  <IconButton color="primary">
                    <Send />
                  </IconButton>
                  <IconButton color="primary">
                    <Explore />
                  </IconButton>
                  <IconButton color="primary">
                    <Favorite />
                  </IconButton>
                  <IconButton color="primary">
                    <AccountCircle />
                  </IconButton>
                </Toolbar>
              </Container>
            </AppBar>
          </div>
        )}
      </>
    );
  }
}

export default withStyles(styles)(Header);
