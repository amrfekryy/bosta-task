import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, Stack } from '@mui/material'


const options = ['6636234', '7234258', '9442984', '1094442']

export default function ControllableStates() {
  const { t } = useTranslation()
  const [value, setValue] = React.useState(options[0]);

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Autocomplete
        // freeSolo
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setValue(newInputValue);
        }}
        options={options}
        noOptionsText={t('This number was not provided for testing, It may cause some UI errors')}
        sx={{ width: 200 }}
        renderInput={(params) =>
          <TextField {...params}
          size='small'
            label={t("Shipment Number")}
            // variant="standard"
          />
        }
      />
      <IconButton position="end" color='primary'>
        <SearchIcon />
      </IconButton>
    </Stack>
  );
}
