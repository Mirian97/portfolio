interface ProjectDividerProps {
  orientation?: 'vertical' | 'horizontal'
  className?: string
}

const ProjectDivider = ({ orientation = 'vertical', className }: ProjectDividerProps) => {
  const orientationClass = orientation === 'vertical' ? 'w-1 h-[108px]' : 'h-1 w-[108px]'
  return (
    <hr className={`bg-white shadow-200 rounded-lg ${orientationClass} ${className}`} />
  )
}

export default ProjectDivider
