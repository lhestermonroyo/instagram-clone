import React, { Component } from 'react';
import {
  withStyles,
  Container,
  FormControl,
  TextField,
  Card,
  CardContent,
  InputAdornment,
  IconButton,
  Button,
  Typography,
} from '@material-ui/core';
import { Visibility, VisibilityOff, Facebook } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../components/Logo';
import { styles } from './styles';
import Footer from '../../components/Footer';
import SignUpCard from '../../components/SignUpCard';
import Divider from '../../components/Divider';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      fullname: '',
      username: '',
      password: '',
      showPassword: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClickShowPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }
  render() {
    const { classes } = this.props;
    const { email, fullname, username, password, showPassword } = this.state;
    return (
      <Container component="main" maxWidth="sm" className={classes.container}>
        <Card className={classes.card}>
          <CardContent>
            <Logo type="text" />
            <Typography
              className={classes.subtitle}
              variant="h6"
              color="textSecondary"
              align="center"
            >
              Sign up to see photos and videos from your friends.
            </Typography>
            <Button
              fullWidth
              color="secondary"
              variant="contained"
              size="large"
              className={classes.buttonlogInWithFacebook}
            >
              <Facebook className={classes.icon} />
              Log in with Facebook
            </Button>
            <Divider />
            <form className={classes.form}>
              <FormControl className={classes.formcontrol}>
                <TextField
                  autoFocus
                  onChange={this.handleChange}
                  name="email"
                  value={email}
                  variant="outlined"
                  size="small"
                  label="Mobile number or email"
                  margin="normal"
                  fullWidth
                />
              </FormControl>
              <FormControl className={classes.formcontrol}>
                <TextField
                  onChange={this.handleChange}
                  name="fullname"
                  value={fullname}
                  variant="outlined"
                  size="small"
                  label="Fullname"
                  margin="normal"
                  fullWidth
                />
              </FormControl>
              <FormControl className={classes.formcontrol}>
                <TextField
                  onChange={this.handleChange}
                  name="username"
                  value={username}
                  variant="outlined"
                  size="small"
                  label="Username"
                  margin="normal"
                  fullWidth
                />
              </FormControl>
              <FormControl className={classes.formcontrol}>
                <TextField
                  type={showPassword ? 'text' : 'password'}
                  onChange={this.handleChange}
                  name="password"
                  value={password}
                  variant="outlined"
                  size="small"
                  label="Password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  margin="normal"
                  fullWidth
                />
              </FormControl>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                size="large"
                className={classes.button}
              >
                Sign Up
              </Button>
              <Typography variant="body2" color="textSecondary" align="center">
                By signing up, you agree to our{' '}
                <Link className={classes.buttonTerms}>Terms</Link>,{' '}
                <Link className={classes.buttonTerms}>Data Policy</Link> and{' '}
                <Link className={classes.buttonTerms}>Cookies Policy</Link>.
              </Typography>
            </form>
          </CardContent>
        </Card>
        <SignUpCard type="signup" />
        <Footer />
      </Container>
    );
  }
}

export default withStyles(styles)(SignUp);
