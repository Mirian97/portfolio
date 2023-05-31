interface ButtonProps {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  endIcon?: React.ReactNode
}

const Button = ({ children, type = 'button', endIcon }: ButtonProps) => {
  return (
    <button className='button' type={type}>
      {children}
      {endIcon}
    </button>
  )
}

export default Button
