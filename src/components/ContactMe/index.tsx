import { Grid } from '@mui/material'
import { ReactComponent as EmailIcon } from 'assets/email-icon.svg'
import { ReactComponent as LocationIcon } from 'assets/location-icon.svg'
import { ReactComponent as WhatsappIcon } from 'assets/whatsapp-icon.svg'
import Subtitle from 'components/Subtitle'
import { Element } from 'react-scroll'
import ContactCard from './ContactCard'
import EmailForm from './EmailForm'

const contactList = [
  {
    name: 'Whatsapp',
    icon: WhatsappIcon,
    info: '+55 11 96265 9170'
  },
  {
    name: 'Email',
    icon: EmailIcon,
    info: 'mirian_quispe97@hotmail.com'
  },
  {
    name: 'Localização',
    icon: LocationIcon,
    info: 'Guarulhos - SP'
  }
]

const ContactMe = () => {
  return (
    <Element name='contact-me'>
      <Subtitle title='Contact me' />
      <Grid container my={4} spacing={6}>
        <Grid item xs={12} sm={6}>
          <EmailForm />
        </Grid>
        <Grid item container xs={12} sm={6} spacing={1}>
          {contactList.map(({ name, icon, info }) => (
            <Grid item xs={12} key={name}>
              <ContactCard name={name} icon={icon} info={info} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Element>
  )
}

export default ContactMe
