import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import SendIcon from '@mui/icons-material/Send'
import SubjectIcon from '@mui/icons-material/Subject'
import { Button, Grid, InputAdornment, TextField, styled } from '@mui/material'
import Icon from 'components/Icon'

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& label': {
    color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#1c1c1c'
  },
  '& .MuiOutlinedInput-root': {
    color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#1c1c1c',
    '&:hover fieldset': {
      borderColor: theme.palette.mode === 'dark' ? '#FFFFFF' : '#1c1c1c'
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main
    }
  }
}))

const EmailForm = () => {
  return (
    <Grid container spacing={2} component='form'>
      <Grid item xs={12}>
        <StyledTextField
          id='email'
          name='email'
          label='E-mail'
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Icon icon={AlternateEmailIcon} color='white' size={16} />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <StyledTextField
          id='subject'
          name='subject'
          label='Assunto'
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Icon icon={SubjectIcon} color='white' size={16} />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <StyledTextField
          id='message'
          name='message'
          label='Mensagem'
          multiline
          fullWidth
          minRows={4}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Icon icon={EmailRoundedIcon} color='white' size={16} />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12} textAlign='center'>
        <Button variant='contained' endIcon={<SendIcon />}>
          Enviar E-mail
        </Button>
      </Grid>
    </Grid>
  )
}

export default EmailForm
