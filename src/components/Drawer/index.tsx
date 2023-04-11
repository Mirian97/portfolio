import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Drawer as MuiDrawer, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import menuList from '_mocks/menuList'
import { ReactComponent as GithubIcon } from 'assets/github-icon.svg'
import { ReactComponent as LinkedinIcon } from 'assets/linkedin-icon.svg'
import Icon from 'components/Icon'
import useGlobal from 'hooks/useGlobal'
import MenuItem from './MenuItem'

const StyledDrawer = styled(MuiDrawer)(({ theme }) => ({
  height: '100vh',
  '.MuiDrawer-paper': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    width: 300
  },
  '.close-drawer': {
    position: 'absolute',
    top: 30,
    right: 35
  }
}))

const Drawer = () => {
  const { openDrawer, handleToggleDrawer } = useGlobal()

  return (
    <StyledDrawer open={openDrawer} anchor='right'>
      <Icon
        className='close-drawer'
        size={40}
        icon={CloseRoundedIcon}
        onClick={handleToggleDrawer}
        color='#ff6563'
      />
      <Stack direction='column' gap={3} justifyContent='center' alignItems='center'>
        {menuList.map(({ name, path }, index) => (
          <MenuItem key={index} content={name} path={path} />
        ))}
      </Stack>
      <Stack direction='row' justifyContent='center' gap={2}>
        <Icon icon={GithubIcon} />
        <Icon icon={LinkedinIcon} />
      </Stack>
    </StyledDrawer>
  )
}

export default Drawer
