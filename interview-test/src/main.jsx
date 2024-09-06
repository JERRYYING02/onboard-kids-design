import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
 <StrictMode>
    <App />
  </StrictMode>,
  </ThemeProvider>
)
