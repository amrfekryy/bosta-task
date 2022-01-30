import React from 'react';
import {
  Paper, Typography
} from '@mui/material'
import Title from 'components/Title';
import { useTranslation } from 'react-i18next';

function Address() {
  const { t } = useTranslation()

  return (
    <>
      <Title text={'Delivery Address'} />
      <Paper elevation={0} variant="outlined" flex={1}
        sx={{
          bgcolor: 'custom.header',
          p: 2,
        }}
      >
        <Typography variant="subtitle2" color="text.secondary" fontWeight={300}>
          {t('address')}
        </Typography>
      </Paper>
    </>
  )
}

export default Address;
