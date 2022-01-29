import React, { useState } from 'react';

export const AppContext = React.createContext({})

export const shipmentNumbers = ['6636234', '7234258', '9442984', '1094442']

function AppContextProvider({ children }) {
  const [shipment, setShipment] = useState(shipmentNumbers[0]);

  return <AppContext.Provider value={{ shipment, setShipment }}>
    {children}
  </AppContext.Provider>;
}

export default AppContextProvider;
