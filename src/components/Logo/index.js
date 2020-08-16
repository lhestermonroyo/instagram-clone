import React from 'react';
import { withStyles } from '@material-ui/core';
import { styles } from './styles';
import logoIcon from '../../resource/logo-icon.png';
import logoText from '../../resource/logo-text.png';

const Logo = (props) => {
  const { type, classes } = props;
  return (
    <>
      {type === 'icon' && (
        <img className={classes.logoIcon} src={logoIcon} alt="logo-icon" />
      )}
      {type === 'nav-text' && (
        <img className={classes.navLogoIcon} src={logoText} alt="logo-text" />
      )}
      {type === 'text' && (
        <div className={classes.logoContainer}>
          <img className={classes.logoIcon} src={logoText} alt="logo-text" />
        </div>
      )}
    </>
  );
};

export default withStyles(styles)(Logo);
