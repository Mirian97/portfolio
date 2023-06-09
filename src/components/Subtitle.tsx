import Divider from './Divider'

interface SubtitleProps {
  content: string
  dividerHeight?: 'thin'
}

const Subtitle = ({ content, dividerHeight }: SubtitleProps) => {
  return (
    <>
      <h1 className='subtitle mb-3'>{content}</h1>
      <Divider dividerHeight={dividerHeight} />
    </>
  )
}

export default Subtitle
