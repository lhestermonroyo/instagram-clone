import React from 'react';
import {
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core';
import Routes from './routes';
import { createHashHistory } from 'history';

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'none',
      },
      colorPrimary: {
        backgroundColor: '#fff',
      },
    },
    MuiInputBase: {
      input: {
        lineHeight: 1,
      },
    },
    MuiCardContent: {
      root: {
        padding: '1.5em 3em',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'capitalize',
        fontWeight: 600,
      },
      contained: {
        boxShadow: 'none',
      },
      text: {
        '&:hover': {
          backgroundColor: '#fff !important',
        },
      },
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#262626',
    },
    secondary: {
      main: '#0095F6',
    },
  },
});
const history = createHashHistory();

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Routes history={history} />
    </MuiThemeProvider>
  );
};

export default App;
