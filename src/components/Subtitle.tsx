import Divider from './Divider'

const Subtitle = ({ content }: { content: string }) => {
  return (
    <>
      <h1 className='text-secondary-400 font-bold text-4xl leading-[43px] mb-3'>
        {content}
      </h1>
      <Divider />
    </>
  )
}

export default Subtitle
