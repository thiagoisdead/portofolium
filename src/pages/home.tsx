// src/App.tsx
import React from 'react';
import { Typography, Box, Grid, Button, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../app.css'; // Caminho relativo para o CSS


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
      <Grid container pt={3} pl={4} pb={1} sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
        <Grid item xs={12} md={5}>
          <Typography variant="h6" onClick={handleClickName} sx={{ cursor: 'pointer' }}>
            THIAGO NAVARRO
          </Typography>
        </Grid>
        <Grid item container xs={12} md={6} spacing={2} pt={3} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 8 }}>
          <a href='https://www.linkedin.com/in/thiago-navarro-7a37b7333/' target='_blank' rel="noreferrer">
            <LinkedInIcon sx={{ fontSize: 'large', scale: "250%" }} />
          </a>
          <a href='https://github.com/thiagoisdead' target='_blank' rel="noreferrer">
            <GitHubIcon sx={{ fontSize: 'large', scale: "250%" }} />
          </a>
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: "1rem", borderColor: 'black' }}></Divider>
      <Grid container item display={"flex"} justifyContent={"center"} mt={3}>
        <Typography sx={{fontSize:"10rem", color:"hsla(240,2.43902439%,16.07843137%,1)"}}>THIAGO NAVARRO</Typography>
      </Grid>

    </Box>
  );
}

export default App;
