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

const textFields = [
  { id: 'email', label: 'E-mail', adornmentIcon: AlternateEmailIcon },
  { id: 'subject', label: 'Assunto', adornmentIcon: SubjectIcon },
  {
    id: 'message',
    label: 'Mensagem',
    adornmentIcon: EmailRoundedIcon,
    multiline: true,
    minRows: 4
  }
]

const EmailForm = () => (
  <Grid
    container
    spacing={2}
    component='form'
    action='https://formsubmit.co/mirian_quispe97@hotmail.com'
    method='POST'
  >
    {textFields.map(({ id, label, adornmentIcon, multiline, minRows }) => (
      <Grid item xs={12} key={id}>
        <StyledTextField
          id={id}
          name={id}
          label={label}
          fullWidth
          multiline={multiline}
          minRows={minRows}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Icon icon={adornmentIcon} size={16} />
              </InputAdornment>
            )
          }}
        />
      </Grid>
    ))}
    <Grid item xs={12} textAlign='center'>
      <Button variant='contained' endIcon={<SendIcon />} type='submit'>
        Enviar E-mail
      </Button>
    </Grid>
  </Grid>
)

export default EmailForm
