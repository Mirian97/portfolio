'use client'
import Button from '@/components/Button'
import InfoItem from '@/components/InfoItem'
import Subtitle from '@/components/Subtitle'
import Title from '@/components/Title'
import { contactInfoList } from '@/constants/contact'
import { apiKey, serviceId, templateId } from '@/constants/emailjs'
import { errorModalContent, successModalContent } from '@/constants/modal'
import { contactSchema, contactSchemaType } from '@/schemas/contactSchema'
import checkSchemaType from '@/utils/checkSchemaType'
import emailjs from '@emailjs/browser'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import EmailIcon from '~/svg/email-icon.svg'
import Input from './Input'
import Modal from './Modal'
import TextArea from './TextArea'

const Contact = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalContent, setModalContent] = useState({ ...successModalContent })
  const closeModal = () => setOpenModal(false)
  const {
    reset,
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<contactSchemaType>({ resolver: yupResolver(contactSchema) })
  const messageValue = watch('message') || ''

  const onSubmit: SubmitHandler<contactSchemaType> = async (data) => {
    try {
      await emailjs.send(serviceId, templateId, data, apiKey)
      reset()
      setModalContent({ ...successModalContent })
      setOpenModal(true)
    } catch (error) {
      setModalContent({ ...errorModalContent })
      setOpenModal(true)
    }
  }

  const renderContactForm = () => (
    <form className='mt-8 grid grid-cols-1 gap-4'>
      <div className='flex flex-col gap-4 sm:flex-row'>
        <Input
          label='Nome *'
          placeholder='Exe.: João Aparecido'
          {...register('from_name')}
          error={Boolean(errors.from_name)}
          errorMessage={checkSchemaType(errors.from_name?.message)}
        />
        <Input
          label='Assunto'
          placeholder='Exe.: Orçamento'
          {...register('subject')}
          error={Boolean(errors.subject)}
          errorMessage={checkSchemaType(errors.subject?.message)}
        />
      </div>
      <Input
        label='E-mail *'
        placeholder='joao.aparecido@gmail.com'
        startIcon={<EmailIcon width={20} />}
        {...register('email')}
        error={Boolean(errors.email)}
        errorMessage={checkSchemaType(errors.email?.message)}
      />
      <TextArea
        label='Mensagem *'
        placeholder='Diga como posso te ajudar...'
        {...register('message')}
        error={Boolean(errors.message)}
        errorMessage={checkSchemaType(errors.message?.message)}
        value={messageValue}
        onChange={(e) => setValue('message', e.target.value)}
      />
      <Button
        type='button'
        onClick={handleSubmit(onSubmit)}
        size='small'
        className='w-full sm:w-[150px] ml-auto'
      >
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
      <Modal openModal={openModal} closeModal={closeModal} {...modalContent} />
    </>
  )
}

export default Contact
