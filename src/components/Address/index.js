import React from 'react';
import {
  Paper, Typography
} from '@mui/material'
import Title from '../Title';

function Address() {
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

          {'امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22'}
        </Typography>
      </Paper>
    </>
  )
}

export default Address;
