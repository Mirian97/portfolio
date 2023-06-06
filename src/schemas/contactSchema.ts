import * as Yup from 'yup'
import messages from './messages'
const { fieldRequired } = messages

export const contactSchema = Yup.object().shape({
  name: Yup.string().required(fieldRequired).trim(),
  subject: Yup.string().required(fieldRequired).trim(),
  email: Yup.string().required(fieldRequired).trim(),
  message: Yup.string().required(fieldRequired).trim()
})

export type contactSchemaType = Yup.InferType<typeof contactSchema>
