import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Stack
} from '@mui/material'
import Title from 'components/Title'
import { formatDate } from 'helpers/functions'

function EventsTable({ TransitEvents }) {
  return (
    <>
      <Title text={'Shipment Details'} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{
              bgcolor: '#FAFAFA',
              '& .MuiTableCell-root': {
                color: "text.secondary"
              }
            }}>
              <TableCell>Hub</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TransitEvents?.map(({ state, timestamp, hub, reason }, i) => (
              <TableRow
                key={timestamp}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{hub}</TableCell>
                <TableCell>{formatDate(timestamp, 'ar', 'date')}</TableCell>
                <TableCell>{formatDate(timestamp, 'ar', 'time')}</TableCell>
                <TableCell>{state}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default EventsTable;