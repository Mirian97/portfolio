/* eslint-disable @next/next/no-img-element */
import TypingEffect from '@/components/TypingEffect'
import { services } from '@/constants/about'
import skills from '@/constants/skills'
import Link from 'next/link'
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
    icon: <GithubIcon className='social-media-icon' />,
    link: 'https://github.com/Mirian97'
  },
  {
    name: 'LinkedIn',
    icon: <LinkedinIcon className='social-media-icon' />,
    link: 'https://www.linkedin.com/in/dev-mirian-quispe/'
  }
]

const Profile = () => {
  const renderAvatarSection = () => (
    <section className='sm:min-h-[348px] sm:max-w-[424px] flex flex-col items-center sm:flex-row sm:justify-center m-auto relative'>
      <KeyLeft
        height={118}
        className='hidden sm:flex sm:w-[13%] sm:self-start sm:mr-[13px]'
      />
      <img
        src='/image/avatar.png'
        alt='Avatar'
        className='sm:mt-[10px] w-[185px] sm:w-[65%] bg-primary-200 rounded-full border-primary-100 border-solid border-[10px] shadow-100 sm:self-start'
      />
      <Dots
        height={17}
        className='hidden sm:flex sm:absolute sm:bottom-8 sm:right-[82px]'
      />
      <KeyRight
        height={118}
        className='hidden sm:flex sm:w-[13%] sm:mt-[224px] sm:ml-[6px]'
      />
      <div className='sm:hidden flex flex-row gap-[14px] items-center mt-2'>
        <KeyLeft height={60} width={33} />
        <Dots height={12} />
        <KeyRight height={60} width={33} />
      </div>
    </section>
  )

  const renderTitleAndSocialMedia = () => (
    <section className='mt-6 mb-8 sm:my-8 sm:ml-[58px]'>
      <h1 className='text-[16px] leading-[19px] text-primary-200 sm:text-2xl sm:leading-[29px] sm:mb-[10px]'>
        Olá, sou <strong className='font-normal'>Mirian Quispe</strong> e...
      </h1>
      <h1 className='font-bold text-secondary-400 text-4xl leading-[43px] sm:text-5xl sm:leading-[58px]'>
        Desenvolvedora
      </h1>
      <h1 className='font-medium text-primary-200 text-[32px] leading-[38px] sm:text-[40px] sm:leading-[48px]'>
        <TypingEffect textToBeTyped={services} />
      </h1>
      <div className='flex flex-row mt-4 gap-2 sm:mt-6 sm:gap-4'>
        {socialMedia.map(({ name, link, icon }) => (
          <a key={name} href={link} target='_blank' className='social-media'>
            {icon}
          </a>
        ))}
      </div>
    </section>
  )

  const renderSkills = () => (
    <section className='flex flex-col items-center mb-8 sm:mb-[70px] sm:mx-6 '>
      <Subtitle content='Habilidades' />
      <div className='flex flex-row flex-wrap justify-center gap-3 sm:gap-6 w-full mt-6 sm:mt-8'>
        {skills.map(({ name, site, iconSource }) => (
          <a
            key={name}
            href={site}
            title={name}
            target='_blank'
            rel='noreferrer'
            className='cursor-pointer'
          >
            <img
              alt={name}
              src={iconSource}
              className='w-[35px] sm:w-12 transform ease-in-out duration-300 hover:scale-[120%]'
            />
          </a>
        ))}
      </div>
    </section>
  )

  const renderButtonsAndGif = () => (
    <section className='flex flex-col gap-6 sm:flex-row sm:justify-between sm:mb-8 sm:gap-6'>
      <div className='w-full flex flex-col gap-3 justify-end'>
        <Link
          href='https://wa.me/5511962659170?text=Ol%C3%A1,%20pode%20me%20ajudar?'
          target='_blank'
        >
          <Button endIcon={<WhatsappIcon height={21} />} size='large'>
            Me Contratar
          </Button>
        </Link>
        <a href='/pdf/Mirian Quispe - Portfolio.pdf' download>
          <Button endIcon={<ClipIcon height={21} />} variant='outlined' size='large'>
            Baixar CV
          </Button>
        </a>
      </div>
      <img
        src='/gif/cat.gif'
        alt='Gif de um gato'
        className='self-center mb-[-2px] sm:mb-[-34px] max-w-[206px]'
      />
    </section>
  )

  return (
    <aside className='card rounded-3xl w-full lg:relative lg:z-[1]'>
      {renderAvatarSection()}
      <div className='px-6 sm:px-8'>
        {renderTitleAndSocialMedia()}
        {renderSkills()}
        {renderButtonsAndGif()}
      </div>
    </aside>
  )
}

export default Profile
