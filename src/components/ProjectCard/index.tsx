import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
  styled
} from '@mui/material'

interface Props {
  title: string
  description: string
  image: string
  techs: string[]
}

const StyledProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: 'relative',
  transition: '0.4s ease-in-out',
  '.title': {
    display: 'none',
    position: 'absolute',
    top: 100,
    left: 8
  },
  ':hover': {
    transform: 'scale(1.05)',
    '.title': {
      display: 'block'
    }
  }
}))

const ProjectCard = ({ title, description, image, techs }: Props) => {
  return (
    <StyledProjectCard>
      <CardActionArea>
        <CardMedia component='img' height='140' image={image} alt={title} />
        <CardContent>
          <Typography className='title' gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='white'>
            {description}
          </Typography>
          <Stack direction='row' spacing={1} mt={2}>
            {techs.map((tech, index) => (
              <Chip key={index} label={tech} color='primary' size='small' />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </StyledProjectCard>
  )
}

export default ProjectCard
