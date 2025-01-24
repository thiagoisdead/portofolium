import React, { useState } from 'react';
import { Typography, Box, Grid, Button, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/index.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClickName = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rolagem suave
    });
    alert('clicado');
  };

  const handleThemeChange = (event: React.MouseEvent<HTMLElement>): void => {
    setDarkMode(!darkMode);
  };

  return (
    <Box
      sx={{
        backgroundColor: darkMode ? '#121212' : '#f5f5f3', // Muda o fundo com base no darkMode
        color: darkMode ? '#fff' : '#000', // Muda a cor do texto com base no darkMode
        minHeight: '100vh',
        transition: 'background-color 1s, color 1s', // Transições suaves
      }}
    >
      <Grid container pt={3} pl={4} pb={1} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <Grid item xs={12} md={5}>
          <Typography variant="h6" onClick={handleClickName} sx={{ cursor: 'pointer' }}>
            THIAGO NAVARRO
          </Typography>
        </Grid>
        <Grid item xs={2} md={1} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>

        </Grid>
        <Grid item container xs={12} md={3} spacing={2} pt={3}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <a href="https://www.linkedin.com/in/thiago-navarro-7a37b7333/" target="_blank" rel="noreferrer">
            <LinkedInIcon sx={{ fontSize: 'large', scale: '250%' }} />
          </a>
          <a href="https://github.com/thiagoisdead" target="_blank" rel="noreferrer">
            <GitHubIcon sx={{ fontSize: 'large', scale: '250%' }} />
          </a>
          <Button onClick={handleThemeChange} sx={{ '&:hover': { boxShadow: 'none', outline: 'none', backgroundColor: 'transparent' }, color: 'inherit', backgroundColor: 'transparent' }}>
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: '1rem', borderColor: 'black' }} />
      <Grid container item display={'flex'} justifyContent={'center'} mt={3}>
        <Typography
          sx={{
            fontSize: '10rem',
            color: darkMode ? '#fff' : 'hsla(240, 2.43902439%, 16.07843137%, 1)', // Cor condicional
          }}
        >
          THIAGO NAVARRO
        </Typography>
      </Grid>
    </Box>
  );
}

export default App;
