import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MyThemeContext } from 'theme'


export default function DarkModeBtn() {
  const { switchMode, mode } = React.useContext(MyThemeContext);
  
  return (
    <IconButton sx={{ ml: 1 }} onClick={switchMode} color="inherit">
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
