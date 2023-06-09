import * as Yup from 'yup'
import messages from './messages'
const {
  fieldRequired,
  invalidEmail,
  minimumNumberOfCharacters,
  maximumNumberOfCharacters
} = messages

export const contactSchema = Yup.object().shape({
  name: Yup.string().required(fieldRequired).trim(),
  subject: Yup.string().trim(),
  email: Yup.string().email(invalidEmail).required(fieldRequired).trim(),
  message: Yup.string()
    .required(fieldRequired)
    .trim()
    .min(100, minimumNumberOfCharacters)
    .max(1000, maximumNumberOfCharacters)
})

export type contactSchemaType = Yup.InferType<typeof contactSchema>
