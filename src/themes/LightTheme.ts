import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface ThemeOptions {
    drawerWidth?: number;
  }
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#01579b',
      light: '#4f83cc',
      dark: '#002f6c',
    },
    secondary: {
      main: '#e3f2fd',
      light: '#ffffff',
      dark: '#b1bfca',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    // background: {
    //   body: '#f9fdff',
    // },
    // white: '#FAFAFA',
    type: 'light',
    tonalOffset: 0.2,
  },
  drawerWidth: 240,
});

export { theme as LightTheme };
