import React from 'react';
import {
  Stack, Box, Typography
} from '@mui/material'

function Item({title="title", value="value"}) {
  return <Stack spacing={1}>
    <Typography variant="overline">{title}</Typography>
    <Typography variant="h6">{value}</Typography>
  </Stack>
}

const titles = ['Shipment Number', 'Last Update', 'Seller Name', 'Delivery Date']

function MainInfo() {
  return <Stack direction="row" justifyContent="space-around" flexWrap="wrap">
    {titles.map(title => {
      return <Item {...{title}}/>
    })}
  </Stack>
  
  
}

export default MainInfo;
