import { GlobalProvider } from 'contexts/GlobalContext'
import { AppThemeProvider } from 'contexts/ThemeContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from 'routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <GlobalProvider>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </GlobalProvider>
    </AppThemeProvider>
  </React.StrictMode>
)
