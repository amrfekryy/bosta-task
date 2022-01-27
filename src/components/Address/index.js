import React from 'react';
import {
  Paper
} from '@mui/material'
import Title from '../Title';

function Address() {
  return (
    <>
      <Title text={'Delivery Address'} />
      <Paper elevation={0} variant="outlined" flex={1}>
        Address
      </Paper>
    </>
  )
}

export default Address;
