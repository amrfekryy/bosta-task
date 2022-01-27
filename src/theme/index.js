import * as React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});

function RTL({ children }) {
  return <div dir='rtl'>
    <CacheProvider value={cacheRtl}>
      {children}
    </CacheProvider>;
  </div>
}

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

export default function MyThemeProvider({ children }) {
  const rtl = false
  return (
    <ThemeProvider theme={theme}>
      {rtl? <RTL>{children}</RTL> : children}
    </ThemeProvider>
  );
}
