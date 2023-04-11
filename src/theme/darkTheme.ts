import { createTheme } from '@mui/material'
import theme from 'theme/index'

export const darkTheme = createTheme(theme, {
  palette: {
    mode: 'dark',
    background: {
      default: '#1c1c1c',
      paper: '#000000'
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'white'
        }
      }
    }
  }
})
