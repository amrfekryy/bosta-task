import React from 'react';
import {
  Stack, Box, Typography, Grid
} from '@mui/material'
import { formatDate } from 'helpers/functions'

function Item({ title = "title", value = "value", color }) {
  return <Stack spacing={0.5}
    alignItems={"center"}
  >
    <Typography variant="overline" color="text.disabled">{title}</Typography>
    <Typography color={color}>{value}</Typography>
  </Stack>
}

function MainInfo({ lastUpdate, shipmentNumber, stateColor, state, deliveryDate }) {

  const info = [
    { title: `Shipment No. ${shipmentNumber}`, value: state, color: stateColor },
    { title: 'Last Update', value: formatDate(lastUpdate, 'ar', 'full') },
    { title: 'Vendor Name', value: 'SOUQ.com' },
    { title: 'Delivery Date', value: formatDate(deliveryDate, 'ar', 'day-date') },
  ]

  return <Grid container sx={{ p: 2 }}>
    {info.map(({ title, value, color }) => {
      return <Grid key={title} item xs={6} sm={3}>
        <Item {...{ title, value, color }} />
      </Grid>
    })}
  </Grid>
}

export default MainInfo;
