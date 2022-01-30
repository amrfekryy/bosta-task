import { useEffect, useState, useContext } from 'react';

import MainInfo from 'components/MainInfo';
import Stepper from 'components/Stepper'
import EventsTable from 'components/EventsTable'
import Address from 'components/Address'
import ReportProblem from 'components/ReportProblem';
import { AppContext } from 'context';
import {
  Grid, Divider, Paper, CircularProgress, Stack,
  Zoom, Collapse, Fade
} from '@mui/material'
import { ReactComponent as NotFound } from 'assets/not_found.svg'

const url = 'https://tracking.bosta.co/shipments/track/'


function analyzeStatus(CurrentStatus) {
  const { state, hub } = CurrentStatus
  let step, color = "success.light";

  switch (state) {
    case "TICKET_CREATED":
      step = 0
      break;
    case "PACKAGE_RECEIVED":
      step = 1
      break;
    case "IN_TRANSIT":
      step = 1
      break;
    case "NOT_YET_SHIPPED":
      step = 1
      break;
    case "OUT_FOR_DELIVERY":
      step = 2
      break;
    case "WAITING_FOR_CUSTOMER_ACTION":
      step = 2
      break;
    case "RECEIVED_DELIVERY_LOCATION":
      step = 2
      break;
    case "DELIVERED":
      step = 3
      break;
    case "DELIVERED_TO_SENDER":
      step = 3
      break;
  }
  return { step, color, hub, state }
}

function TrackShipment() {
  const { shipment } = useContext(AppContext)

  const [shipmentData, setShipmentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)

    fetch(url + shipment)
      .then(res => res.json())
      .then(data => {
        // console.log('shipmentData', data);
        setShipmentData(data)
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  }, [shipment]);

  const {
    CreateDate = '',
    SupportPhoneNumbers = [],
    TrackingURL = '',
    CurrentStatus={},
    TrackingNumber: shipmentNumber,
    TransitEvents,
    PromisedDate: deliveryDate = ''
  } = shipmentData || {}

  // console.table(TransitEvents)

  const status = analyzeStatus(CurrentStatus)

  const loadingJSX = (<Stack direction="row" justifyContent="center">
    <CircularProgress />
  </Stack>)

  const notFoundJSX = (<Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
    <NotFound width={300} height={300} />
  </Stack>)

  return loading ? loadingJSX : shipmentData?.error ? notFoundJSX
    : (<>
      {/* <Collapse in={!!shipmentData} orientation='horizontal' mountOnEnter unmountOnExit> */}
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Paper elevation={0} variant="outlined">
            <MainInfo {...{
              shipmentNumber,
              lastUpdate: CurrentStatus?.timestamp,
              state: CurrentStatus?.state,
              status,
              deliveryDate,
            }} />
            <Divider />
            <Stepper {...{status}}/>
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
