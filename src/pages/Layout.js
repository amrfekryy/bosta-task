import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavBar from 'components/NavBar';

function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="md" sx={{ py: 5 }}>
        {children}
      </Container>
    </>
  );
}

export default Layout;