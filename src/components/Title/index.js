import React from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Title({ text }) {
  const { t } = useTranslation()
  return (
    <Typography sx={{ py: 2 }}>{t(text)}</Typography>
  );
}

export default Title;
