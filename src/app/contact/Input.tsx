import { LegacyRef, forwardRef, useId } from 'react'

interface InputProps {
  label: string
  placeholder: string
  startIcon?: React.ReactNode
}

const InputRef = (
  { label, placeholder, startIcon }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) => {
  const id = useId()

  return (
    <div className='flex flex-col w-full text-secondary-200'>
      <label className='font-medium text-sm leading-5'>{label}</label>
      <div className='min-h-[44px] shadow-300 border-[1px] border-solid border-secondary-75 rounded-lg flex flex-row items-center gap-2 w-full px-[14px] focus-within:border-secondary-200'>
        {startIcon}
        <input
          ref={ref}
          id={id}
          placeholder={placeholder}
          className='text-[16px] leading-6 w-full focus:outline-none '
        />
      </div>
    </div>
  )
}

const Input = forwardRef(InputRef)
export default Input
