interface InfoItemProps {
  name: string
  description: string
  className?: string
}

const InfoItem = ({ name, description, className }: InfoItemProps) => {
  return (
    <div className={`flex flex-row gap-1 ${className}`}>
      <h5 className='text-xl leading-6 font-bold text-secondary-300 break-normal'>
        {name}:
      </h5>
      <h5 className='text-xl leading-6 text-success-200'>{description}</h5>
    </div>
  )
}

export default InfoItem
