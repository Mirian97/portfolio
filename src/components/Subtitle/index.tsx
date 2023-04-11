import { Stack, Typography, styled } from '@mui/material'

interface Props {
  title: string
}

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  // fontFamily: "'Permanent Marker', cursive",
  fontSize: '5rem',
  lineHeight: '4rem',
  padding: theme.spacing(0, 2)
  // textAlign: 'center'
}))

// const StyledDivider = styled('hr')(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
//   width: '100%',
//   height: 18,
//   border: 'none',
//   borderRadius: 6
// }))

const Subtitle = ({ title }: Props) => {
  return (
    <Stack
    // flexDirection='row'
    // alignItems='center'
    // justifyContent='center'
    >
      {/* <StyledDivider /> */}
      <StyledSubtitle color='primary' fontFamily='Lilita One'>
        # {title}
      </StyledSubtitle>
      {/* <StyledDivider /> */}
    </Stack>
  )
}

export default Subtitle
