import GetAppIcon from '@mui/icons-material/GetApp'
import { Button, Grid, Stack, Typography, styled } from '@mui/material'
import Subtitle from 'components/Subtitle'
import { Element } from 'react-scroll'
import Avatar from './Avatar'

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(10, 5),

  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(3, 0),
    h5: {
      fontSize: '2rem'
    }
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse'
  }
}))

const AboutMe = () => {
  return (
    <Element name='about-me'>
      <Subtitle title='About me' />
      <StyledGridContainer container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Stack direction='column' gap={3}>
            <Typography variant='h5'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi
            </Typography>
            <Typography variant='h5'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi
            </Typography>
            <Stack direction='row' justifyContent='center'>
              <Button variant='contained' endIcon={<GetAppIcon />}>
                Baixar Currículo
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack justifyContent='center' alignItems='center'>
            <Avatar />
          </Stack>
        </Grid>
      </StyledGridContainer>
    </Element>
  )
}

export default AboutMe
