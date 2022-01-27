import React from 'react';
import { Typography } from '@mui/material';

function Title({text}) {
  return (
    <Typography sx={{py: 2}}>{text}</Typography>
  );
}

export default Title;
