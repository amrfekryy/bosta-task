import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, Stack, Tooltip } from '@mui/material'
import { shipmentNumbers, AppContext } from 'context';

const message = `
Hi there, please be aware that this number was not provided in the task description. It may cause UI bugs like wrong shipment status, or untranslated text in the details table.
`

export default function ControllableStates() {
  const { t } = useTranslation()

  const { shipment, setShipment } = useContext(AppContext)
  const [value, setValue] = React.useState(shipment);


  return (
    <Stack direction="row" alignItems="center" spacing={0.5}>
      <Autocomplete
        // freeSolo
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setValue(newInputValue);
        }}
        options={shipmentNumbers}
        noOptionsText={t(message)}
        sx={{ width: 200 }}
        renderInput={(params) =>
          <TextField {...params}
            size='small'
            label={t("Shipment Number")}
          // variant="standard"
          />
        }
      />
      <Tooltip title={t("search")}>
        <IconButton position="end" color='primary' disabled={!value}
          onClick={() => setShipment(value)}
        >
          <SearchIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
