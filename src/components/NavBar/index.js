import React, { useContext } from 'react';
import { ReactComponent as LogoAr } from 'assets/logo_ar.svg'
import { ReactComponent as LogoEn } from 'assets/logo_en.svg'
import {
  Paper, Stack, Box, useMediaQuery
} from '@mui/material'
import { MyThemeContext } from 'theme'
import ModeBtn from 'components/ModeBtn'
import LanguageBtn from 'components/LanguageBtn'
import NumberInput from 'components/NumberInput'


function NavBar() {
  const up600 = useMediaQuery('(min-width:600px)', { noSsr: true })
  const { rtl } = useContext(MyThemeContext)

  const Logo = rtl ? LogoAr : LogoEn

  return <Paper elevation={0}>
    <Stack
      direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap"
      sx={{ minHeight: 70, px: 5 }}
      spacing={1}
    >
      <Logo width={100} height={100} />
      {up600 && <NumberInput />}
      <Box>
        <ModeBtn />
        <LanguageBtn />
      </Box>
    </Stack>
    {!up600 && <Stack direction="row" justifyContent="center">
      <NumberInput />
    </Stack>}
  </Paper>;
}

export default NavBar;
