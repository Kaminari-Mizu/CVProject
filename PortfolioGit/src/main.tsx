import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './Components/AppContext';
import Data from './assets/data.json'
const accData = Data.achievements;
//const accordionProps: AccordionProps = {AccordData: accData,};
const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'green',
});



ReactDom.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <MantineProvider theme={theme}> 
    <BrowserRouter>
    <AppProvider value={{ AccordionProps: {AccordData: accData }}}>
    <App />
    </AppProvider>
    </BrowserRouter>  
    </MantineProvider>
    </React.StrictMode>
)
