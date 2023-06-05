import Divider from './Divider'

interface SubtitleProps {
  content: string
  dividerHeight?: 'thin'
}

const Subtitle = ({ content, dividerHeight }: SubtitleProps) => {
  return (
    <>
      <h1 className='text-secondary-400 font-bold text-2xl leading-[29px] mb-3'>
        {content}
      </h1>
      <Divider dividerHeight={dividerHeight} />
    </>
  )
}

export default Subtitle
