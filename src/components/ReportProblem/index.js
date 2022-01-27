import React from 'react';
import { Paper } from '@mui/material'
import { ReactComponent as Icon } from '../../assets/question.svg'
import { Stack, Typography, Button } from '@mui/material'

function ReportProblem() {
  return <Paper elevation={0} variant="outlined">
    <Stack direction="row" spacing={1}>
      <Icon width={100} height={100} />
      <Stack justifyContent="center" alignItems="center" sx={{ textAlign: 'center' }} spacing={1}>
        <Typography>Is there a problem in your shipment?</Typography>
        <Button variant="contained" disableElevation size="small"
          sx={{ borderRadius: 2 }}
        >
          Report a problem
        </Button>
      </Stack>
    </Stack>
  </Paper>

}

export default ReportProblem;
