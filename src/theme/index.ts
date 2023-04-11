import { ThemeOptions } from '@mui/material/styles'

const theme: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 0
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '::placeholder': {
            color: 'white'
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '1.5rem',
          textTransform: 'capitalize',
          ':hover': {
            border: '1px solid white'
          }
        }
      }
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          transition: '0.4s ease-in-out',
          ':hover': {
            filter: 'brightness(30%)'
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  },
  palette: {
    grey: {
      50: '#F9FAFB',
      100: '#F2F4F7',
      200: '#EAECF0',
      300: '#D0D5DD',
      400: '#98A2B3',
      500: '#667085',
      600: '#475467',
      700: '#344054',
      800: '#1D2939',
      900: '#101828'
    },
    primary: {
      main: '#ff6563',
      dark: '#c83600',
      light: '#f28283',
      contrastText: '#FFF'
    },
    secondary: {
      main: '#8d55c2',
      dark: '#7a35b7',
      light: '#a174cd',
      contrastText: '#FFF'
    }
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: "'Sofia Sans Condensed', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "'Sofia Sans Condensed', sans-serif",
      fontSize: '7.2rem',
      lineHeight: ' 9rem'
    },
    h2: {
      fontFamily: "'Sofia Sans Condensed', sans-serif",
      fontSize: '6rem',
      lineHeight: '7.2rem'
    },
    h3: {
      fontFamily: "'Sofia Sans Condensed', sans-serif",
      fontSize: '4.8rem',
      lineHeight: '6rem'
    },
    h4: {
      fontFamily: "'Sofia Sans Condensed', sans-serif",
      fontSize: '3.6rem',
      lineHeight: '4.4rem'
    },
    h5: {
      fontFamily: "'Sofia Sans Condensed', sans-serif",
      fontSize: '3rem',
      lineHeight: '3.8rem'
    },
    h6: {
      fontFamily: "'Sofia Sans Condensed', sans-serif",
      fontSize: '2.4rem',
      lineHeight: '3.2rem'
    },
    subtitle1: {
      fontFamily: "'Sofia Sans Condensed', sans-serif",
      fontSize: '2rem',
      lineHeight: '3rem'
    },
    subtitle2: {
      fontFamily: "'Sofia Sans Condensed', sans-serif",
      fontSize: ' 1.8rem',
      lineHeight: '2.8rem'
    },
    body1: {
      fontFamily: "'Sofia Sans Condensed', sans-serif",
      fontSize: '1.6rem',
      lineHeight: '2.4rem'
    },
    body2: {
      fontFamily: "'Sofia Sans Condensed', sans-serif",
      fontSize: '1.4rem',
      lineHeight: '2rem'
    },
    caption: {
      fontFamily: "'Sofia Sans Condensed', sans-serif",
      fontSize: '1.2rem',
      lineHeight: '1.8rem'
    },
    button: {
      fontFamily: "'Sofia Sans Condensed', sans-serif",
      fontWeight: 700,
      fontSize: '1.6rem',
      lineHeight: '2.4rem',
      color: '#FFFFFF',
      minHeight: 44
    }
  }
}

export default theme
