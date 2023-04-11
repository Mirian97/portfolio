import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { AppBar, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useAppThemeContext } from 'contexts/ThemeContext'
import useGlobal from 'hooks/useGlobal'
import Icon from '../Icon'
import ToggleTheme from './ToggleTheme'

const StyledHeader = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(3, 6),
  height: '100px',
  width: '100%',
  position: 'sticky',
  top: 0
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Lilita One', cursive",
  color: theme.palette.mode === 'dark' ? theme.palette.primary.main : '#fff'
}))

const Header = () => {
  const { toggleTheme } = useAppThemeContext()
  const { handleToggleDrawer } = useGlobal()

  return (
    <StyledHeader>
      <StyledTypography variant='h2'>MQ</StyledTypography>
      <Stack direction='row' gap={4} alignItems='center'>
        <ToggleTheme onClick={toggleTheme} />
        <Icon
          size={40}
          icon={MenuRoundedIcon}
          color='white'
          onClick={handleToggleDrawer}
        />
      </Stack>
    </StyledHeader>
  )
}

export default Header
