import InfoItem from '@/components/InfoItem'
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
import SectionTransition from '@/features/SectionTransition'
import ListIcon from '~/svg/list-icon.svg'
import StarIcon from '~/svg/star-icon.svg'
import AboutItem from '../../components/AboutItem'
import SkillList from '../../components/SkillList'

const About = () => (
  <SectionTransition>
    <Title content='Sobre mim' />
    <section className='pt-6 pb-10 sm:pt-[32px] sm:pb-[24px] flex flex-col gap-2'>
      {aboutList.map(({ name, description }) => (
        <AboutItem key={name} description={description} />
      ))}
    </section>
    <section className='hidden sm:flex flex-row justify-between mb-8'>
      {locationAndAvailability.map((item) => (
        <InfoItem key={item.description} {...item} />
      ))}
    </section>
    <Subtitle content='Curiosidades' dividerHeight='thin' />
    <p className='text-about mt-4 mb-10 sm:mb-8'>{curiosities}</p>
    <section className='flex flex-col gap-10 px-2 sm:flex-row sm:gap-1 sm:justify-between sm:items-end'>
      <SkillList listIcon={<ListIcon width={8} />} list={languages} listWidth='158px'>
        <Subtitle content='Idiomas' dividerHeight='thin' />
      </SkillList>
      <ProjectDivider className='hidden sm:flex' />
      <SkillList listIcon={<StarIcon width={12} />} list={services} listWidth='87px'>
        <Subtitle content='Serviços' dividerHeight='thin' />
      </SkillList>
    </section>
  </SectionTransition>
)

export default About
