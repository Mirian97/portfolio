import GetAppIcon from '@mui/icons-material/GetApp'
import { Button, Grid, Stack, Typography } from '@mui/material'
import Subtitle from 'components/Subtitle'
import { Element } from 'react-scroll'
import Avatar from './Avatar'

const AboutMe = () => {
  return (
    <Element name='about-me'>
      <Subtitle title='About me' />
      <Grid container spacing={2} my={10} mx={5}>
        <Grid item xs={6}>
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
        <Grid item xs={6}>
          <Stack justifyContent='center' alignItems='center'>
            <Avatar />
          </Stack>
        </Grid>
      </Grid>
    </Element>
  )
}

export default AboutMe
