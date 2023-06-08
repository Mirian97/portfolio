import { CommonInputProps } from '@/interfaces/CommonInputProps'
import getCharactersRemaining from '@/utils/getCharactersRemaining'
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
  const charactersRemaining = getCharactersRemaining(maxLength, value)
  return (
    <div className='input-container'>
      <label htmlFor={id}>{label}</label>
      <div className={`input ${error && 'error-input'}`}>
        {startIcon}
        <textarea
          id={id}
          ref={ref}
          placeholder={placeholder}
          className='py-3 min-h-[154px] resize-none'
          {...restProps}
          maxLength={maxLength}
        />
      </div>
      {error && <span className='text-red-600'>{errorMessage}</span>}
      {maxLength && value !== undefined && (
        <span className='text-secondary-150'>
          {charactersRemaining} caracteres restantes
        </span>
      )}
    </div>
  )
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(TextAreaRef)
export default TextArea
