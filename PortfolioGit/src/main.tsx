import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'
import { BrowserRouter } from 'react-router-dom'

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'green',
});



ReactDom.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <MantineProvider theme={theme}> 
    <BrowserRouter>
    <App />
    </BrowserRouter>  
    </MantineProvider>
    </React.StrictMode>
)
