import Divider from './Divider'

const Title = ({ content }: { content: string }) => {
  return (
    <>
      <h1 className='text-secondary-400 font-bold text-[32px] leading-[38px] sm:text-4xl sm:leading-[43px] mb-4'>
        {content}
      </h1>
      <Divider />
    </>
  )
}

export default Title
