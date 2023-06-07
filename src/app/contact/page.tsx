'use client'
import Button from '@/components/Button'
import InfoItem from '@/components/InfoItem'
import Subtitle from '@/components/Subtitle'
import Title from '@/components/Title'
import { contactInfoList } from '@/constants/contact'
import { contactSchema, contactSchemaType } from '@/schemas/contactSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import EmailIcon from '~/svg/email-icon.svg'
import Input from './Input'
import TextArea from './TextArea'

export const metadata = {
  title: 'Portfólio | Contato',
  description: 'Portfólio pessoal de Mirian Quispe'
}

const Contact = () => {
  const {
    setValue,
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<contactSchemaType>({ resolver: yupResolver(contactSchema) })

  const onSubmit: SubmitHandler<contactSchemaType> = async (data) => {
    try {
      reset()
    } catch (error) {}
  }

  const renderContactForm = () => (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-8 grid grid-cols-1 gap-4'>
      <div className='flex flex-col gap-4 sm:flex-row'>
        <Input
          label='Nome *'
          placeholder='Exe.: João Aparecido'
          {...register('name')}
          error={Boolean(errors.name)}
          errorMessage={errors.name?.message}
        />
        <Input
          label='Assunto'
          placeholder='Exe.: Orçamento'
          {...register('subject')}
          error={Boolean(errors.subject)}
          errorMessage={errors.subject?.message}
        />
      </div>
      <Input
        label='E-mail *'
        placeholder='joao.aparecido@gmail.com'
        startIcon={<EmailIcon width={20} />}
        {...register('email')}
        error={Boolean(errors.email)}
        errorMessage={errors.email?.message}
      />
      <TextArea
        label='Mensagem *'
        placeholder='Diga como posso te ajudar...'
        {...register('message')}
        error={Boolean(errors.message)}
        errorMessage={errors.message?.message}
        maxLength={400}
      />
      <Button type='submit' size='small' className='w-full sm:w-[150px] ml-auto'>
        Enviar
      </Button>
    </form>
  )

  return (
    <>
      <Title content='Entrar em contato' />
      <div className='flex flex-col gap-2 mt-8 mb-6 sm:flex-row sm:flex-wrap sm:gap-4 sm:mt-8 sm:mb-12 sm:justify-between'>
        <InfoItem {...contactInfoList[0]} className='w-full' />
        {contactInfoList.slice(1).map((item, index) => (
          <InfoItem {...item} key={index} />
        ))}
      </div>
      <Subtitle content='Me envie um e-mail!' dividerHeight='thin' />
      {renderContactForm()}
    </>
  )
}

export default Contact
