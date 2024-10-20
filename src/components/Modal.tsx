import Button from '@/components/Button'
import { useEffect } from 'react'

interface ModalProps {
  openModal: boolean
  closeModal: () => void
  title: string
  description: string
}

const Modal = ({ openModal, closeModal, title, description }: ModalProps) => {
  useEffect(() => {
    const toggleBodyScroll = (toggle: boolean) => {
      document.body.style.overflow = toggle ? 'hidden' : 'auto'
    }
    toggleBodyScroll(openModal)
  }, [openModal])

  return (
    <>
      {openModal && (
        <div className='min-h-full min-w-full bg-black bg-opacity-75 fixed bottom-0 top-0 left-0 right-0 z-[3] flex flex-row justify-center items-center'>
          <div className='w-[400px] bg-white p-8 rounded-2xl text-center'>
            <h4 className='subtitle'>{title}</h4>
            <p className='text-[16px] leading-6 text-secondary-300 mt-2 mb-8'>
              {description}
            </p>
            <Button onClick={closeModal}>Ok</Button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
