/* eslint-disable @next/next/no-img-element */
import skills from '@/constants/skills'
import Avatar from '~/svg/avatar.svg'
import Dots from '~/svg/dots.svg'
import GithubIcon from '~/svg/github-icon.svg'
import KeyLeft from '~/svg/key-left.svg'
import KeyRight from '~/svg/key-right.svg'
import LinkedinIcon from '~/svg/linkedin-icon.svg'
import Subtitle from './Subtitle'

const socialMedia = [
  {
    name: 'Github',
    icon: <GithubIcon width={40} />,
    link: 'https://github.com/Mirian97'
  },
  {
    name: 'LinkedIn',
    icon: <LinkedinIcon width={40} />,
    link: 'https://www.linkedin.com/in/dev-mirian-quispe/'
  }
]

const Profile = () => {
  const renderAvatarSection = () => (
    <section className='w-full h-[348px] relative'>
      <KeyLeft height={118} className='absolute top-0 left-[58px]' />
      <Avatar width={287} className='m-auto pt-2' />
      <Dots width={67} className='absolute bottom-8 right-[174px]' />
      <KeyRight height={118} className='absolute bottom-0 right-[58px]' />
    </section>
  )

  const renderTitleAndSocialMedia = () => (
    <section className='my-8 ml-[58px]'>
      <h1 className='text-2xl text-primary-200 mb-[10px]'>Olá, sou Mirian Quispe e...</h1>
      <h1 className='text-5xl text-secondary-400 font-bold leading-[58px]'>
        Desenvolvedora
      </h1>
      <h1 className='text-4xl font-medium text-primary-200 leading-[48px]'>Full Stack</h1>
      <div className='flex flex-row gap-4 mt-5'>
        {socialMedia.map(({ name, link, icon }) => (
          <a key={name} href={link} target='_blank'>
            {icon}
          </a>
        ))}
      </div>
    </section>
  )

  const renderSkills = () => (
    <section className='flex flex-col items-center mb-[101px] mx-6'>
      <Subtitle content='Habilidades' />
      <div className='flex flex-row flex-wrap justify-center gap-6 w-full mt-8'>
        {skills.map(({ name, site, iconSource }) => (
          <a key={name} href={site} target='_blank' rel='noreferrer'>
            <img alt={name} src={iconSource} />
          </a>
        ))}
      </div>
    </section>
  )

  return (
    <aside className='card border-3 rounded-[28px] w-[604px] px-8 pb-8 leading-[29px]'>
      {renderAvatarSection()}
      {renderTitleAndSocialMedia()}
      {renderSkills()}
    </aside>
  )
}

export default Profile
