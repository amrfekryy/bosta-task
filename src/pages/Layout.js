import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ height: '100vh', py: 5 }} >
          {children}
        </Box>
      </Container>
    </>
  );
}

export default Layout;