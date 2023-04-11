import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import { Box } from '@mui/system'
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { darkTheme } from 'theme/darkTheme'
import GlobalStyles from 'theme/globalStyles'
import { lightTheme } from 'theme/lightTheme'

interface IThemeContextData {
  themeName: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext({} as IThemeContextData)

export const useAppThemeContext = () => {
  return useContext(ThemeContext)
}

interface AppThemeProviderProps {
  children: React.ReactNode
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) => (oldThemeName === 'light' ? 'dark' : 'light'))
  }, [])

  const theme = useMemo(() => {
    if (themeName === 'light') return lightTheme
    return darkTheme
  }, [themeName])

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={{ themeName, toggleTheme }}>
        <CssBaseline />
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Box width='100%' minHeight='100vh' bgcolor={theme.palette.background.default}>
            {children}
          </Box>
        </ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  )
}
