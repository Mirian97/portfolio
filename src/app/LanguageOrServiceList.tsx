interface LanguageOrServiceListProps {
  list: string[]
  listWidth: string
  listIcon: React.ReactNode
  children?: React.ReactNode
}

const LanguageOrServiceList = ({
  list,
  listWidth,
  listIcon,
  children
}: LanguageOrServiceListProps) => (
  <div className='flex flex-col items-center sm:items-start'>
    {children}
    <div className='mt-4 flex flex-col gap-2'>
      {list.map((item, index) => (
        <div key={index} className={`flex flex-row gap-1 w-[${listWidth}]`}>
          {listIcon}
          <p className='text-[16px] leading-[19px] text-secondary-300'>{item}</p>
        </div>
      ))}
    </div>
  </div>
)

export default LanguageOrServiceList
