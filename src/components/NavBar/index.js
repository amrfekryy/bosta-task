import React, { useContext } from 'react';
import { ReactComponent as LogoAr } from 'assets/logo_ar.svg'
import { ReactComponent as LogoEn } from 'assets/logo_en.svg'
import {
  Paper, Stack, Box
} from '@mui/material'
import { MyThemeContext } from 'theme'
import ModeBtn from 'components/ModeBtn'
import LanguageBtn from 'components/LanguageBtn'
import NumberInput from 'components/NumberInput'

function NavBar() {
  const { rtl } = useContext(MyThemeContext)

  const Logo = rtl ? LogoAr : LogoEn

  return <Paper
    // variant='outlined'
    elevation={0}
  >
    <Stack
      direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap"
      sx={{ minHeight: 70, px: 5 }}
    >
      <Logo width={100} height={100} />
      <NumberInput />
      <Box>
        <ModeBtn />
        <LanguageBtn />
      </Box>
    </Stack>
  </Paper>;
}

export default NavBar;
