import React from 'react';
import { Paper } from '@mui/material'
import { ReactComponent as Icon } from 'assets/question.svg'
import { Stack, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next';

function ReportProblem() {
  const { t } = useTranslation()

  return <Paper elevation={0} variant="outlined" sx={{ height: '100%', p: 1 }}>
    <Stack
      direction="row" justifyContent="center" alignItems="center" spacing={1}
      sx={{ height: '100%' }}
    >
      <Icon width={90} height={90} />
      <Stack justifyContent="center" alignItems="center" spacing={1}>
        <Typography align="center" fontSize="0.7rem">{t('Is there a problem in your shipment?')}</Typography>
        <Button variant="contained" disableElevation 
          sx={{ borderRadius: 2, fontSize: '0.6rem' }}
        >
          {t('Report a problem')}
        </Button>
      </Stack>
    </Stack>
  </Paper>

}

export default ReportProblem;
