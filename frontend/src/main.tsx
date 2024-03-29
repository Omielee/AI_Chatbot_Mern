import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx'
import toaster, { Toaster } from 'react-hot-toast'
import axios from 'axios'

axios.defaults.baseURL="http://localhost:8080/api/v1"
axios.defaults.withCredentials = true;

const theme = createTheme({
  typography: {
    fontFamily: "Robot Slab,serif",
    allVariants: { color: "white" },

  },
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Toaster position='top-right'>
          </Toaster>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>

  </React.StrictMode>,
)
