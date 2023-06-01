/* eslint-disable @next/next/no-img-element */
const AboutItem = ({ description }: { description: string }) => (
  <div className='flex flex-row items-center gap-2 min-h-[35px] xs:min-h-[42px]'>
    <img
      src='/svg/done-icon.svg'
      alt='Ìcone de check'
      className='max-w-[20px] xs:max-w-[24px]'
    />
    <span className='text-[16px] leading-[19px] xs:text-xl xs:leading-6 text-secondary-300'>
      {description}
    </span>
  </div>
)

export default AboutItem
