/* eslint-disable @next/next/no-img-element */
import skills from '@/constants/skills'
import Avatar from '~/svg/avatar.svg'
import ClipIcon from '~/svg/clip-icon.svg'
import Dots from '~/svg/dots.svg'
import GithubIcon from '~/svg/github-icon.svg'
import KeyLeft from '~/svg/key-left.svg'
import KeyRight from '~/svg/key-right.svg'
import LinkedinIcon from '~/svg/linkedin-icon.svg'
import WhatsappIcon from '~/svg/whatsapp-icon.svg'
import Button from '../components/Button'
import Subtitle from '../components/Subtitle'

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
    <section className='w-full min-h-[348px] flex flex-col justify-center items-center gap-4 xs:relative'>
      <Avatar width={287} className='m-auto pt-2' />
      <div className='flex flex-row gap-5'>
        <KeyLeft height={118} className='xs:absolute xs:top-0 xs:left-[58px]' />
        <Dots width={67} className='xs:absolute xs:bottom-0 xs:right-[142px]' />
        <KeyRight
          height={60}
          className='xs:min-h-[118px] xs:absolute xs:bottom-0 xs:right-0'
        />
      </div>
    </section>
  )

  const renderTitleAndSocialMedia = () => (
    <section className='mt-6 mb-8 xs:my-8 xs:ml-[58px]'>
      <h1 className='text-2xl text-primary-200 mb-[10px]'>Olá, sou Mirian Quispe e...</h1>
      <h1 className='text-5xl text-secondary-400 font-bold leading-[58px]'>
        Desenvolvedora
      </h1>
      <h1 className='text-4xl font-medium text-primary-200 leading-[48px]'>Full Stack</h1>
      <div className='flex flex-row gap-4 mt-4 xs:mt-5'>
        {socialMedia.map(({ name, link, icon }) => (
          <a key={name} href={link} target='_blank' className='social-media'>
            {icon}
          </a>
        ))}
      </div>
    </section>
  )

  const renderSkills = () => (
    <section className='flex flex-col items-center mb-8 xs:mb-[70px] xs:mx-6 '>
      <Subtitle content='Habilidades' />
      <div className='flex flex-row flex-wrap justify-center gap-6 w-full mt-6 xs:mt-8'>
        {skills.map(({ name, site, iconSource }) => (
          <a
            key={name}
            href={site}
            target='_blank'
            rel='noreferrer'
            className='cursor-pointer'
          >
            <img alt={name} src={iconSource} />
          </a>
        ))}
      </div>
    </section>
  )

  const renderButtonsAndGif = () => (
    <section className='flex flex-col gap-6 xs:flex-row xs:justify-between xs:mb-8 xs:gap-6'>
      <div className='w-full flex flex-col gap-3 justify-end'>
        <Button endIcon={<WhatsappIcon height={21} />}>Me Contratar</Button>
        <Button endIcon={<ClipIcon height={21} />} variant='outlined'>
          Baixar CV
        </Button>
      </div>
      <img
        src='/gif/cat.gif'
        alt='Gif de um gato'
        className='self-center mb-[-11px] xs:mb-[-42px] min-w-[206px]'
      />
    </section>
  )

  return (
    <aside className='card border-3 rounded-[28px] w-[604px] px-5 xs:px-8'>
      {renderAvatarSection()}
      {renderTitleAndSocialMedia()}
      {renderSkills()}
      {renderButtonsAndGif()}
    </aside>
  )
}

export default Profile
