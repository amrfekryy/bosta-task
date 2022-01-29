import * as React from 'react';
import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

import Check from '@mui/icons-material/Check';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TaskIcon from '@mui/icons-material/Task';

import { useTranslation } from 'react-i18next';
import { getValue } from 'helpers/functions';
import { useTheme } from '@mui/system';

const ColorlibConnector = styled(StepConnector)(({ theme, statusColor }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 15,
    left: 'calc(-50%)',
    right: 'calc(50%)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: statusColor,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: statusColor,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 5,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#ccc',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ statusColor, theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 30,
  height: 30,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: statusColor,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    // position: 'relative',
    // top: 7,
    // width: 20,
    // height: 20,  
    backgroundColor: statusColor,
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className, icon, statusColor } = props;

  const icons = {
    1: <ConfirmationNumberIcon />,
    2: <InventoryIcon />,
    3: <LocalShippingIcon />,
    4: <TaskIcon />,
  };

  return (
    <ColorlibStepIconRoot statusColor={statusColor} ownerState={{ completed, active }} className={className}>
      {completed ? <Check /> : icons[icon]}
    </ColorlibStepIconRoot>
  );
}


const steps = ['Ticket Created', 'Package Received', 'Out for Delivery', 'Delivered'];

export default function CustomizedSteppers() {
  const { t } = useTranslation()
  const { palette } = useTheme()
  const statusColor = getValue(palette, 'success.light')

  return (
    <Stack sx={{ width: '100%', p: 2 }} spacing={4}>
      <Stepper alternativeLabel activeStep={2} connector={<ColorlibConnector statusColor={statusColor} />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              StepIconProps={{ statusColor: statusColor }}
            >
              {t(label)}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
