import { Box, styled } from '@mui/material'
import { ElementType } from 'react'

interface IconProps {
  icon: ElementType
  color?: string
  size?: string | number
  onClick?: () => void
  className?: string
}

const StyledIcon = styled(Box)(({ color, theme }) => ({
  cursor: 'pointer',
  // ':hover': {
  //   opacity: '50%',
  //   transition: 'all 0.5s ease-in'
  // },
  '.MuiSvgIcon-root path, path': {
    fill: color ?? theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000'
  }
}))

const Icon = ({ icon, color, size = 24, onClick, className }: IconProps) => {
  return (
    <StyledIcon
      component={icon}
      color={color}
      width={size}
      height={size}
      onClick={onClick}
      className={className}
    />
  )
}

export default Icon
