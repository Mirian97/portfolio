import { Box, Link, Stack, Typography, styled } from '@mui/material'
import { ReactComponent as GithubIcon } from 'assets/github-icon.svg'
import { ReactComponent as LinkedinIcon } from 'assets/linkedin-icon.svg'
import Icon from 'components/Icon'

const StyledFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(3, 6),
  backgroundColor: theme.palette.mode === 'dark' ? '#171717' : theme.palette.primary.main
}))

const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant='body1' color='white'>
        Meu portfólio
      </Typography>
      <Link href='#'>
        <Typography variant='body1' color='white'>
          Copyright © Direitos reservados a Mirian Quispe.
        </Typography>
      </Link>
      <Stack direction='row' justifyContent='center' gap={2} mt={2}>
        <Icon icon={GithubIcon} />
        <Icon icon={LinkedinIcon} />
      </Stack>
    </StyledFooter>
  )
}

export default Footer
