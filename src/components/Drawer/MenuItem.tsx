import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import useGlobal from 'hooks/useGlobal'
import { Link } from 'react-scroll'

const StyledMenuItem = styled(Typography)(({ theme }) => ({
  fontFamily: "'Permanent Marker', cursive",
  color: theme.palette.mode === 'dark' ? '#FFF' : '#000',
  '&:hover': {
    color: theme.palette.primary.main
  }
}))

interface Props {
  content: string
  path: string
}

const MenuItem = ({ content, path }: Props) => {
  const { handleToggleDrawer } = useGlobal()

  return (
    <Link
      href={path}
      activeClass='active'
      to={path}
      spy={true}
      smooth={true}
      offset={-120}
      duration={500}
      onClick={handleToggleDrawer}
    >
      <StyledMenuItem variant='h5'>{content}</StyledMenuItem>
    </Link>
  )
}

export default MenuItem
