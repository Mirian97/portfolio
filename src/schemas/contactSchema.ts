import * as Yup from 'yup'
import messages from './messages'
const { fieldRequired, invalidEmail, invalidCharacterLength } = messages

export const contactSchema = Yup.object().shape({
  name: Yup.string().required(fieldRequired).trim(),
  subject: Yup.string().trim(),
  email: Yup.string().email(invalidEmail).required(fieldRequired).trim(),
  message: Yup.string().required(fieldRequired).trim().max(400, invalidCharacterLength)
})

export type contactSchemaType = Yup.InferType<typeof contactSchema>
