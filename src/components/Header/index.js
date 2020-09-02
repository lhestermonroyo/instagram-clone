import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  InputBase,
  withStyles,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
  Divider,
  Avatar,
} from '@material-ui/core';
import {
  Search,
  AccountCircle,
  Bookmark,
  Settings,
  HomeOutlined,
  SendOutlined,
  ExploreOutlined,
  FavoriteBorderOutlined,
  Home,
  Send,
  Explore,
} from '@material-ui/icons';
import Logo from '../Logo';
import { styles } from './styles';
import { Link } from 'react-router-dom';
import AvatarImg from '../../resource/avatar.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }
  handleClose(e) {
    this.setState({ anchorEl: null });
  }
  render() {
    const { classes, history } = this.props;
    const { anchorEl } = this.state;
    const { pathname } = history.location;
    return (
      <>
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
                <IconButton
                  color="primary"
                  onClick={() => history.push('/feed')}
                >
                  {pathname === '/feed' ? <Home /> : <HomeOutlined />}
                </IconButton>
                <IconButton
                  color="primary"
                  onClick={() => history.push('/inbox')}
                >
                  {pathname === '/inbox' ? <Send /> : <SendOutlined />}
                </IconButton>
                <IconButton color="primary">
                  {pathname === '/explore' ? <Explore /> : <ExploreOutlined />}
                </IconButton>
                <IconButton color="primary">
                  <FavoriteBorderOutlined />
                </IconButton>
                <IconButton
                  onClick={this.handleClick}
                  color="primary"
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  aria-haspopup="true"
                >
                  <Avatar
                    className={classes.avatarImg}
                    alt="Eren Jaeger"
                    src={AvatarImg}
                  />
                </IconButton>
                <Menu
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={() => history.push('/profile')}>
                    <ListItemIcon>
                      <AccountCircle />
                    </ListItemIcon>
                    <Typography variant="primary">Profile</Typography>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Bookmark />
                    </ListItemIcon>
                    <Typography variant="primary">Saved</Typography>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Settings />
                    </ListItemIcon>
                    <Typography variant="primary">Settings</Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={() => history.push('/')}>
                    <Typography variant="primary">Log Out</Typography>
                  </MenuItem>
                </Menu>
              </Toolbar>
            </Container>
          </AppBar>
        </div>
        )
      </>
    );
  }
}

export default withStyles(styles)(Header);
