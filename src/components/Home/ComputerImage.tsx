import { styled } from '@mui/material/styles'
import computerImage from 'assets/computer.png'

const StyledComputerImage = styled('img')(({ theme }) => ({
  display: 'block',
  position: 'relative',
  height: 350,
  animation: 'float 5s ease-in-out infinite',
  '@keyframes float': {
    '0%': {
      transform: 'translateY(0)'
    },
    '50%': {
      transform: 'translate3d(-30px, -40px, 0)'
    },
    '100%': {
      transform: 'translateY(0)'
    }
  },
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const ComputerImage = () => {
  return <StyledComputerImage src={computerImage} alt='Computador' />
}

export default ComputerImage
