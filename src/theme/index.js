import React, { useState } from 'react';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider
} from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import i18n from 'i18n';

export const MyThemeContext = React.createContext({})

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

const lightTheme = {
  palette: {
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
}

const darkTheme = {
  ...lightTheme,
  palette: {
    ...lightTheme.palette,
    mode: 'dark'
  },
}

export default function MyThemeProvider({ children }) {

  const [rtl, setRtl] = useState(false);
  i18n.changeLanguage(rtl ? 'ar' : 'en')
  const switchDir = () => setRtl(s => !s)

  const [mode, setMode] = useState('light');
  const switchMode = () => setMode(s => s === 'light' ? 'dark' : 'light')
  const theme = React.useMemo(() => {
    return createTheme(mode === 'light'? lightTheme : darkTheme, {
      palette: {
        direction: rtl ? 'rtl' : 'ltr',
      }
    })
  }, [mode, rtl]);

  return (
    <MuiThemeProvider theme={theme}>
      <MyThemeContext.Provider value={{ rtl, switchDir, mode, switchMode }}>
        {rtl ? <RTL>{children}</RTL> : children}
      </MyThemeContext.Provider>
    </MuiThemeProvider>
  );
}
