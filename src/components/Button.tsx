import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  endIcon?: React.ReactNode
  variant?: 'contained' | 'outlined'
  size?: 'small' | 'medium' | 'large'
}

const Button = ({
  children,
  type = 'button',
  endIcon,
  variant = 'contained',
  className,
  size = 'medium',
  onClick
}: ButtonProps) => {
  const buttonSizeClasses = {
    small: 'h-[40px] text-[16px]',
    medium: 'h-[48px] text-[16px]',
    large: 'h-[61px] text-2xl'
  }

  return (
    <button
      className={`button button-${variant} ${buttonSizeClasses[size]} ${className} font-bold w-full`}
      type={type}
      onClick={onClick}
    >
      {children}
      {endIcon}
    </button>
  )
}

export default Button
