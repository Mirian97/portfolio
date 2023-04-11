import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Element } from 'react-scroll'
import Typewriter from 'typewriter-effect'
import ComputerImage from './ComputerImage'

const StyledHome = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: theme.spacing(15),
  '.typewriter': {
    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    fontSize: '5rem',
    fontFamily: 'Lilita One'
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    '.content-home': {
      textAlign: 'center'
    }
  }
}))

const Home = () => {
  return (
    <Element name='home'>
      <StyledHome>
        <div className='content-home'>
          <Typography variant='h4' mb={2} color='primary'>
            Olá, sou Mirian Quispe e...
          </Typography>
          <Typography variant='h1' fontFamily='Lilita One'>
            Desenvolvedora
          </Typography>
          <Typewriter
            options={{
              strings: ['Full Stack.', 'Front-End.', 'Back-End.'],
              autoStart: true,
              loop: true,
              skipAddStyles: true,
              wrapperClassName: 'typewriter'
            }}
          />
        </div>
        <ComputerImage />
      </StyledHome>
    </Element>
  )
}

export default Home
