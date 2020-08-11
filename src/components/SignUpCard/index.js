import React from 'react';
import { withStyles, Card, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { styles } from './styles';

const SignUpCard = (props) => {
  const { classes, type } = props;
  return (
    <Card className={classes.cardSignUp}>
      <CardContent>
        {type === 'login' && (
          <Typography variant="body1" align="center">
            Don't have an account?{' '}
            <Link className={classes.buttonSignUp} to="/sign-up">
              Sign Up
            </Link>
          </Typography>
        )}
        {type === 'signup' && (
          <Typography variant="body1" align="center">
            Have an account?{' '}
            <Link className={classes.buttonSignUp} to="/">
              Log In
            </Link>
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(SignUpCard);
