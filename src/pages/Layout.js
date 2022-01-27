import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 5 }}>
        {children}
      </Container>
    </>
  );
}

export default Layout;