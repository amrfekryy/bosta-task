import React from 'react';
import {
  Grid, Paper
} from '@mui/material'

function Address() {
  return (
    <Paper elevation={0} variant="outlined" flex={1}>
      Address
    </Paper>
  )
}

function ReportProblem() {
  return (
    <Paper elevation={0} variant="outlined">
      Report a Problem
    </Paper>
  )
}

function Section() {

  return <Grid container spacing={1}>
    <Grid item xs={12} sm={6} md={12}>
      <Address />
    </Grid>
    <Grid item xs={12} sm={6} md={12}>
      <ReportProblem />
    </Grid>
  </Grid>
}

export default Section;
