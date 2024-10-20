interface SkillListProps {
  list: string[]
  listWidth: string
  listIcon: React.ReactNode
  children?: React.ReactNode
}

const SkillList = ({ list, listWidth, listIcon, children }: SkillListProps) => (
  <div className='flex flex-col items-center sm:items-start'>
    {children}
    <div className='mt-4 flex flex-col gap-2'>
      {list.map((item) => (
        <div key={item} className={`flex flex-row gap-1 w-[${listWidth}]`}>
          {listIcon}
          <p className='text-[16px] leading-[19px] text-secondary-300'>{item}</p>
        </div>
      ))}
    </div>
  </div>
)

export default SkillList
