import { styled } from '@mui/material'
import avatarImage from 'assets/avatar.jpg'

const StyledAvatar = styled('img')(({ theme }) => ({
  width: 300,
  borderRadius: '50%',
  border: `20px solid ${theme.palette.primary.main}`
}))

const Avatar = () => {
  return <StyledAvatar src={avatarImage} alt='Avatar' />
}

export default Avatar
