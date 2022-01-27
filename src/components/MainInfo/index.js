import React from 'react';
import {
  Stack, Box, Typography
} from '@mui/material'

function Item({title="title", value="value"}) {
  return <div>
    <Typography variant="overline">{title}</Typography>
    <Typography>{value}</Typography>
  </div>
}

const titles = ['Shipment No.', 'Last Update', 'Seller Name', 'Delivery Date']

function MainInfo() {
  return <Stack direction="row" justifyContent="space-around" flexWrap="wrap"
    sx={{p: 2}}
  >
    {titles.map(title => {
      return <Item {...{title}}/>
    })}
  </Stack>
  
  
}

export default MainInfo;
