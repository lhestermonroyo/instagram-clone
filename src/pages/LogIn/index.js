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
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import Divider from '../../components/Divider';
import LogInWithFbButton from '../../components/LogInWithFbButton';
import { styles } from './styles';
import Footer from '../../components/Footer';
import SignUpCard from '../../components/SignUpCard';

class LogIn extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      showPassword: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClickShowPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { history } = this.props;
    history.push('/feed');
  }
  render() {
    const { classes } = this.props;
    const { username, password, showPassword } = this.state;
    return (
      <Container component="main" maxWidth="sm" className={classes.container}>
        <Card className={classes.card}>
          <CardContent>
            <Logo type="text" />
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <FormControl className={classes.formcontrol}>
                <TextField
                  autoFocus
                  onChange={this.handleChange}
                  name="username"
                  value={username}
                  variant="outlined"
                  size="small"
                  label="Phone number, username, or email"
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
                Log In
              </Button>
            </form>
            <Divider />
            <div className={classes.formFooter}>
              <LogInWithFbButton />
              <Typography variant="body2" align="center">
                <Link
                  className={classes.buttonForgetPassword}
                  to="/forget-password"
                >
                  Forget Password?
                </Link>
              </Typography>
            </div>
          </CardContent>
        </Card>
        <SignUpCard type="login" />
        <Footer />
      </Container>
    );
  }
}

export default withStyles(styles)(LogIn);
