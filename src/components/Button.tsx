interface ButtonProps {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  endIcon?: React.ReactNode
  variant?: 'contained' | 'outlined'
  className?: string
  size?: 'small' | 'medium' | 'large'
}

const Button = ({
  children,
  type = 'button',
  endIcon,
  variant = 'contained',
  className,
  size = 'medium'
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
    >
      {children}
      {endIcon}
    </button>
  )
}

export default Button
