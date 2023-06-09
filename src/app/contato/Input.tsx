import { CommonInputProps } from '@/interfaces/CommonInputProps'
import { InputHTMLAttributes, LegacyRef, forwardRef, useId } from 'react'

type InputProps = CommonInputProps & InputHTMLAttributes<HTMLInputElement>

const InputRef = (
  { label, placeholder, startIcon, error, errorMessage, ...restProps }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) => {
  const id = useId()
  return (
    <div className='input-container'>
      <label htmlFor={id}>{label}</label>
      <div className={`input ${error && 'error-input'} px-[14px]`}>
        {startIcon}
        <input id={id} ref={ref} placeholder={placeholder} type='text' {...restProps} />
      </div>
      {error && <span className='text-red-600'>{errorMessage}</span>}
    </div>
  )
}

const Input = forwardRef<HTMLInputElement, InputProps>(InputRef)
export default Input
