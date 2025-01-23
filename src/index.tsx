// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import App from './pages/home';
import theme from './theme/theme'; // Importe o tema personalizado

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ThemeProvider theme={theme}>  {/* Envolva a aplicação com o ThemeProvider */}
      <App />
    </ThemeProvider>
  );
} else {
  console.error('Elemento root não encontrado.');
}
