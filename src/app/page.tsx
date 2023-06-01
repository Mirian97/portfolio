import Title from '@/components/Title'
import { aboutList } from '@/constants/about'
import AboutItem from './AboutItem'

const Home = () => {
  return (
    <div>
      <Title content='Sobre mim' />
      <section className='pt-6 pb-10 xs:pt-[32px] xs:pb-[24px] flex flex-col gap-2'>
        {aboutList.map(({ name, description }) => (
          <AboutItem key={name} description={description} />
        ))}
      </section>
    </div>
  )
}

export default Home
