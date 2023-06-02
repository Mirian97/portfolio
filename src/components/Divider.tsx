const Divider = ({ dividerHeight }: { dividerHeight?: string }) => {
  const height = dividerHeight === 'thin' ? '2' : '3'
  return (
    <div className={`h-${height} w-[206px] bg-primary-100 rounded-lg`}>
      <div className='h-full w-[42px] bg-primary-200 rounded-lg ml-10' />
    </div>
  )
}

export default Divider
