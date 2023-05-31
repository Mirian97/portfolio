/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import AboutMenuIcon from '~/svg/about-menu-icon.svg'
import ContactMenuIcon from '~/svg/contact-menu-icon.svg'
import ProjectsMenuIcon from '~/svg/projects-menu-icon.svg'

const iconWidth = 40

const menuList = [
  {
    menuLabel: 'Sobre',
    path: '/',
    targetSegment: null,
    menuIcon: <AboutMenuIcon width={iconWidth} />
  },
  {
    menuLabel: 'Projetos',
    path: '/projects',
    targetSegment: 'news',
    menuIcon: <ProjectsMenuIcon icon={iconWidth} />
  },
  {
    menuLabel: 'Contato',
    path: '/contact',
    targetSegment: 'contact',
    menuIcon: <ContactMenuIcon icon={iconWidth} />
  }
]

const Menu = () => {
  return (
    <nav className='border-[3px] border-solid border-secondary-50 border-r-0 rounded-[28px] rounded-r-none py-6 px-8 flex flex-col gap-12 mt-7 transition-all duration-400 ease-in-out'>
      {menuList.map(({ menuLabel, path, menuIcon }) => (
        <Link
          key={menuLabel}
          href={path}
          className='flex flex-col justify-center items-center gap-1 hover:text-primary-200 text-md font-bold'
        >
          {menuIcon}
          {menuLabel}
        </Link>
      ))}
    </nav>
  )
}

export default Menu
