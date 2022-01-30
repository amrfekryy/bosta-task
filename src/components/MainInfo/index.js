import React from 'react';
import {
  Stack, Typography, Grid
} from '@mui/material'
import { formatDate } from 'helpers/functions'
import { useTranslation } from 'react-i18next';

function Item({ title = "title", value = "value", color }) {
  return <Stack spacing={0.5} alignItems={"center"}
    sx={{p: 0.5}}
  >
    <Typography align="center" color="text.secondary" fontSize="0.77rem">{title}</Typography>
    <Typography align="center" color={color}>{value}</Typography>
  </Stack>
}

function MainInfo({ lastUpdate, shipmentNumber, status, deliveryDate }) {
  const { t, i18n: { language } } = useTranslation()

  const info = [
    { title: t('Shipment No. ') + shipmentNumber, value: t(status.state), color: status.color },
    { title: t('Last Update'), value: formatDate(lastUpdate, language, 'full') },
    { title: t('Vendor Name'), value: 'SOUQ.com' },
    { title: t('Delivery Date'), value: formatDate(deliveryDate, language, 'day-date') },
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
