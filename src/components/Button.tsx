interface ButtonProps {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  endIcon?: React.ReactNode
  variant?: 'contained' | 'outlined'
}

const Button = ({
  children,
  type = 'button',
  endIcon,
  variant = 'contained'
}: ButtonProps) => {
  return (
    <button className={`button button-${variant}`} type={type}>
      {children}
      {endIcon}
    </button>
  )
}

export default Button
