import * as React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({

  palette: {
    // mode: 'dark',
    direction: 'rtl',
    primary: {
      main: '#ff0000',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Cairo, Roboto, sans-serif',
    fontSize: 12,
  },
});

export default function MyThemeProvider({children}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
