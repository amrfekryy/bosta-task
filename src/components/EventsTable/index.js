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
import { useTranslation } from 'react-i18next';

function EventsTable({ TransitEvents }) {
  const { t, i18n: { language } } = useTranslation()

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
              <TableCell>{t('Hub')}</TableCell>
              <TableCell>{t('Date')}</TableCell>
              <TableCell>{t('Time')}</TableCell>
              <TableCell>{t('Details')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TransitEvents?.map(({ state, timestamp, hub, reason }, i) => (
              <TableRow
                key={timestamp}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{t(hub)}</TableCell>
                <TableCell>{formatDate(timestamp, language, 'date')}</TableCell>
                <TableCell>{formatDate(timestamp, language, 'time')}</TableCell>
                <TableCell>{t(state)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default EventsTable;