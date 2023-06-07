import { CommonInputProps } from '@/interfaces/CommonInputProps'
import { LegacyRef, TextareaHTMLAttributes, forwardRef, useEffect, useState } from 'react'

type TextAreaProps = CommonInputProps & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextAreaRef = (
  {
    label,
    placeholder,
    startIcon,
    error,
    errorMessage,
    maxLength,
    ...restProps
  }: TextAreaProps,
  ref: LegacyRef<HTMLTextAreaElement> | undefined
) => {
  const [typedValue, setTypedValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTypedValue(event.target.value)
  }

  const charactersRemaining = maxLength ? maxLength - typedValue.length : undefined

  useEffect(() => {
    if (!errorMessage) {
      setTypedValue('')
    }
  }, [errorMessage, maxLength, typedValue])

  return (
    <div className='input-container'>
      <label>{label}</label>
      <div className={`input ${error && 'error-input'}`}>
        {startIcon}
        <textarea
          ref={ref}
          placeholder={placeholder}
          className='py-3 min-h-[154px] resize-none'
          {...restProps}
          onChange={handleChange}
          maxLength={maxLength}
        />
      </div>
      <div className='flex flex-row justify-between gap-1'>
        {charactersRemaining && (
          <span className='text-secondary-150'>
            {charactersRemaining} caracteres restantes
          </span>
        )}
        {error && <span className='text-red-600'>{errorMessage}</span>}
      </div>
    </div>
  )
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(TextAreaRef)
export default TextArea
