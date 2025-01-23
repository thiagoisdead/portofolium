// src/App.tsx
import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';

function App() {


  const handleClickName = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Rolagem suave
    });
    alert('clicado')
  }
  return (

    <Box>
      <Grid container pt={3} pl={3}>
        <Grid item xs={12} >
          <Typography variant="h5" fontWeight={700} onClick={handleClickName} sx={{ cursor: 'pointer' }}>
            THIAGO NAVARRO
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
