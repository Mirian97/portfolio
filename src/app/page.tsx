import ProjectDivider from '@/components/ProjectDivider'
import Subtitle from '@/components/Subtitle'
import Title from '@/components/Title'
import {
  aboutList,
  curiosities,
  languages,
  locationAndAvailability,
  services
} from '@/constants/about'
import ListIcon from '~/svg/list-icon.svg'
import StarIcon from '~/svg/star-icon.svg'
import AboutItem from './AboutItem'
import LanguageOrServiceList from './LanguageOrServiceList'

const About = () => (
  <>
    <Title content='Sobre mim' />
    <section className='pt-6 pb-10 sm:pt-[32px] sm:pb-[24px] flex flex-col gap-2'>
      {aboutList.map(({ name, description }) => (
        <AboutItem key={name} description={description} />
      ))}
    </section>
    <section className='hidden sm:flex flex-row justify-between mb-8'>
      {locationAndAvailability.map(({ name, description }) => (
        <div key={name} className='flex flex-row gap-1'>
          <h5 className='text-about font-bold break-normal'>{name}:</h5>
          <h5 className='text-xl leading-6 text-success-200'>{description}</h5>
        </div>
      ))}
    </section>
    <Subtitle content='Curiosidades' dividerHeight='thin' />
    <p className='text-about mt-4 mb-10 sm:mb-8'>{curiosities}</p>
    <section className='flex flex-col gap-10 px-2 sm:flex-row sm:gap-1 sm:justify-between sm:items-end'>
      <LanguageOrServiceList
        listIcon={<ListIcon width={8} />}
        list={languages}
        listWidth='158px'
      >
        <Subtitle content='Idiomas' dividerHeight='thin' />
      </LanguageOrServiceList>
      <ProjectDivider className='hidden sm:flex' />
      <LanguageOrServiceList
        listIcon={<StarIcon width={12} />}
        list={services}
        listWidth='87px'
      >
        <Subtitle content='Serviços' dividerHeight='thin' />
      </LanguageOrServiceList>
    </section>
  </>
)

export default About
