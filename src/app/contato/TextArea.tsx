import { CommonInputProps } from '@/interfaces/CommonInputProps'
import { LegacyRef, TextareaHTMLAttributes, forwardRef, useId } from 'react'

type TextAreaProps = CommonInputProps & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextAreaRef = (
  {
    label,
    placeholder,
    startIcon,
    error,
    errorMessage,
    maxLength,
    value,
    ...restProps
  }: TextAreaProps,
  ref: LegacyRef<HTMLTextAreaElement> | undefined
) => {
  const id = useId()
  return (
    <div className='input-container'>
      <label htmlFor={id}>{label}</label>
      <div className={`input ${error && 'error-input'}`}>
        {startIcon}
        <textarea
          id={id}
          ref={ref}
          placeholder={placeholder}
          className='py-3 px-[14px] min-h-[154px]'
          {...restProps}
          maxLength={maxLength}
        />
      </div>
      {error && <span className='text-red-600'>{errorMessage}</span>}
      {typeof value === 'string' && (
        <span className='text-secondary-150'>{value.length} caracteres</span>
      )}
    </div>
  )
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(TextAreaRef)
export default TextArea
