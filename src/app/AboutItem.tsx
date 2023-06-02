/* eslint-disable @next/next/no-img-element */
const AboutItem = ({ description }: { description: string }) => (
  <div className='flex flex-row items-center gap-2 min-h-[35px] sm:min-h-[42px]'>
    <img
      src='/svg/done-icon.svg'
      alt='Ìcone de check'
      className='max-w-[20px] sm:max-w-[24px]'
    />
    <span className='text-about'>{description}</span>
  </div>
)

export default AboutItem
