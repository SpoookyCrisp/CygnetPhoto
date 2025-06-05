import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import './index.css'

// Optional: Sync MUI theme breakpoints/colors with your Tailwind config
const theme = createTheme({
  palette: {
    primary: { main: '#1e40af' },   // for example, Tailwind’s blue-800
    secondary: { main: '#fbbf24' }, // amber-400
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
