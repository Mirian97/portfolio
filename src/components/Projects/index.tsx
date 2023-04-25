import { Grid, Stack } from '@mui/material'
import projectList from '_mocks/projectList'
import ProjectCard from 'components/ProjectCard'
import Subtitle from 'components/Subtitle'
import { Element } from 'react-scroll'

const Projects = () => {
  return (
    <Element name='projects'>
      <Subtitle title='Projects' />
      <Grid container my={10} spacing={4}>
        {projectList.map(({ title, description, image, techs }) => (
          <Grid item xs={12} sm={6} md={4} key={title}>
            <Stack direction='row' justifyContent='center'>
              <ProjectCard
                title={title}
                description={description}
                image={image}
                techs={techs}
              />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Element>
  )
}

export default Projects
