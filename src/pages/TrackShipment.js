import { useEffect, useState } from 'react';

import MainInfo from '../components/MainInfo';
import Stepper from '../components/Stepper'
import EventsTable from '../components/EventsTable'

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
    TransitEvents=[]
  } = data

  console.table(TransitEvents)

  return <EventsTable {...{TransitEvents}}/>
}

export default TrackShipment;
