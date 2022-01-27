import { useEffect, useState } from 'react';

import MainInfo from '../components/MainInfo';
import Stepper from '../components/Stepper'
import EventsTable from '../components/EventsTable'
import Address from '../components/Address'

import {
  Grid, Divider, Paper
} from '@mui/material'

const url = 'https://tracking.bosta.co/shipments/track/'

const shipments = ['6636234', '7234258', '9442984', '1094442']

function TrackShipment() {
  const [data, setData] = useState('');

  useEffect(() => {

    fetch(url + shipments[3])
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
        setData(data)
      })
  }, []);

  const {
    CreateDate,
    CurrentStatus,
    SupportPhoneNumbers,
    TrackingNumber,
    TrackingURL,
    TransitEvents = []
  } = data

  console.table(TransitEvents)

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={0} variant="outlined">
            <MainInfo />
            <Divider sx={{ my: 3 }} />
            <Stepper />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <EventsTable {...{ TransitEvents }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Address />
        </Grid>
      </Grid>
    </>
  )
}

export default TrackShipment;
