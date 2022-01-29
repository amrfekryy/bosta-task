import React from 'react';
import { useTranslation } from 'react-i18next';
import { MyThemeContext } from 'theme'
import { Button } from '@mui/material'

export default function LanguageBtn() {
  const { switchDir } = React.useContext(MyThemeContext)
  const { t } = useTranslation()

  return <Button
    onClick={switchDir}
  >
    {t('switch language')}
  </Button>
}
