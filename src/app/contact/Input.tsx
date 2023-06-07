import { CommonInputProps } from '@/interfaces/CommonInputProps'
import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'

type InputProps = CommonInputProps & InputHTMLAttributes<HTMLInputElement>

const InputRef = (
  { label, placeholder, startIcon, error, errorMessage, ...restProps }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) => {
  return (
    <div className='input-container'>
      <label>{label}</label>
      <div className={`input ${error && 'error-input'}`}>
        {startIcon}
        <input ref={ref} placeholder={placeholder} type='text' {...restProps} />
      </div>
      {error && <span className='text-red-600'>{errorMessage}</span>}
    </div>
  )
}

const Input = forwardRef<HTMLInputElement, InputProps>(InputRef)
export default Input
