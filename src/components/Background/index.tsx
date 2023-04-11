import { Grid } from '@mui/material'
import Subtitle from 'components/Subtitle'
import { Element } from 'react-scroll'
import Education from './Education'
import Skills from './Skills'

const Background = () => {
  return (
    <Element name='background'>
      <Subtitle title='Background' />
      <Grid container my={4} spacing={6}>
        <Grid item xs={6}>
          <Education />
        </Grid>
        <Grid item xs={6}>
          <Skills />
        </Grid>
      </Grid>
    </Element>
  )
}

export default Background
