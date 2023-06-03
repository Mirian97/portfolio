interface DividerProps {
  dividerHeight?: 'thin'
}

const Divider = ({ dividerHeight }: DividerProps) => {
  const height = dividerHeight === 'thin' ? 'h-2' : 'h-3'
  return (
    <div
      className={`${height} w-[206px] bg-primary-100 rounded-lg relative overflow-hidden`}
    >
      <div className='h-full w-[42px] bg-primary-200 rounded-lg absolute animate-move-left-to-right' />
    </div>
  )
}

export default Divider
