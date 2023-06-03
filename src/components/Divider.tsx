const Divider = ({ dividerHeight }: { dividerHeight?: string }) => {
  const height = dividerHeight === 'thin' ? '2' : '3'
  return (
    <div
      className={`h-${height} w-[206px] bg-primary-100 rounded-lg relative overflow-hidden`}
    >
      <div className='h-full w-[42px] bg-primary-200 rounded-lg absolute animate-move-left-to-right' />
    </div>
  )
}

export default Divider
