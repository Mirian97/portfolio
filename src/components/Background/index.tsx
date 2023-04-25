import { Grid, styled } from '@mui/material'
import Subtitle from 'components/Subtitle'
import { Element } from 'react-scroll'
import Education from './Education'
import Skills from './Skills'

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(4, 0),

  '.skills-container': {
    display: 'flex',
    justifyContent: 'center'
  }
}))

const Background = () => (
  <Element name='background'>
    <Subtitle title='Background' />
    <StyledGridContainer container>
      <Grid item xs={12} sm={7} md={6}>
        <Education />
      </Grid>
      <Grid item xs={12} sm={5} md={6} className='skills-container'>
        <Skills />
      </Grid>
    </StyledGridContainer>
  </Element>
)

export default Background
