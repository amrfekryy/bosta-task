import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function EventsTable({TransitEvents}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hub</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TransitEvents.map(({state, timestamp, hub, reason}, i) => (
            <TableRow
              key={timestamp}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{hub}</TableCell>
              <TableCell>{timestamp}</TableCell>
              <TableCell>{timestamp}</TableCell>
              <TableCell>{state}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EventsTable;