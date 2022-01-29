import { useEffect, useState } from 'react';

import MainInfo from 'components/MainInfo';
import Stepper from 'components/Stepper'
import EventsTable from 'components/EventsTable'
import Address from 'components/Address'
import ReportProblem from 'components/ReportProblem';
import NumberInput from 'components/NumberInput'

import {
  Grid, Divider, Paper,
  Zoom, Collapse, Fade
} from '@mui/material'

const url = 'https://tracking.bosta.co/shipments/track/'
const shipments = ['6636234', '7234258', '9442984', '1094442']

function getStateColor(state) {
  return {
    "DELIVERED": "success.light",
    "DELIVERED_TO_SENDER": "error.light"
  }[state] || ""
}

function TrackShipment() {
  const [shipmentData, setShipmentData] = useState(null);

  useEffect(() => {

    fetch(url + shipments[1])
      .then(res => res.json())
      .then(data => {
        // console.log('shipmentData', data);
        setShipmentData(data)
      })
  }, []);

  const {
    CreateDate,
    SupportPhoneNumbers,
    TrackingURL,
    CurrentStatus,
    TrackingNumber: shipmentNumber,
    TransitEvents,
    PromisedDate: deliveryDate
  } = shipmentData || {}

  console.table(TransitEvents)

  const stateColor = getStateColor(CurrentStatus?.state)

  return (
    <>
    {/* <Collapse in={!!shipmentData} orientation='horizontal' mountOnEnter unmountOnExit> */}
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <Paper elevation={0} variant="outlined">
              <MainInfo {...{
                shipmentNumber,
                lastUpdate: CurrentStatus?.timestamp,
                state: CurrentStatus?.state,
                stateColor,
                deliveryDate,
              }} />
              <Divider />
              <Stepper />
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <EventsTable {...{ TransitEvents }} />
          </Grid>

          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>

              <Grid item xs={12} sm={6} md={12}>
                <Address />
              </Grid>

              <Grid item xs={12} sm={6} md={12}>
                <ReportProblem />
              </Grid>

            </Grid>
          </Grid>

        </Grid>
    {/* </Collapse> */}
    </>
  )
}

export default TrackShipment;
