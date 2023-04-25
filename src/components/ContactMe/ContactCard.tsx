import { Card, Stack, SvgIcon, Typography, styled } from '@mui/material'
import { ElementType } from 'react'

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1c1c1c' : '#fff',
  cursor: 'pointer',
  padding: theme.spacing(2),
  transition: '0.5s',
  display: 'flex',
  alignItems: 'center'
  // ':hover': {
  //   rotate: '3deg'
  // }
}))

interface Props {
  name: string
  info: string
  icon: ElementType
}

const ContactCard = ({ name, info, icon }: Props) => {
  return (
    <StyledCard elevation={2}>
      <SvgIcon component={icon} color='primary' fontSize='large' inheritViewBox />
      <Stack direction='column' ml={2}>
        <Typography variant='h6' mb={0.5}>
          {name}
        </Typography>
        <Typography variant='body1'>{info}</Typography>
      </Stack>
    </StyledCard>
  )
}

export default ContactCard
