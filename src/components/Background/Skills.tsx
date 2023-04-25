import { Box, Link, Stack, Typography, styled } from '@mui/material'
import skills from '_mocks/skills'

const StyledLink = styled(Link)(({ theme }) => ({
  transition: '0.5s',
  ':hover': {
    WebkitTransform: 'translateY(-5px)',
    transform: 'translateY(-5px)'
  }
}))

const Skills = () => {
  return (
    <Box maxWidth={450} py={4}>
      <Typography variant='h4' mb={4} textAlign='center' fontFamily='Lilita One'>
        Habilidades
      </Typography>
      <Stack direction='row' gap={2} justifyContent='center' sx={{ flexWrap: 'wrap' }}>
        {skills.map(({ name, site, iconSource }) => (
          <StyledLink key={name} href={site} target='_blank' rel='noreferrer'>
            <img alt={name} src={iconSource} />
          </StyledLink>
        ))}
      </Stack>
    </Box>
  )
}

export default Skills
