import { createTheme } from '@mui/material'
import theme from 'theme/index'

export const lightTheme = createTheme(theme, {
  palette: {
    background: {
      default: '#fff5e4',
      paper: '#FFFFFF'
    }
  }
})
