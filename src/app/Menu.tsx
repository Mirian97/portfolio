'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Fragment } from 'react'
import AboutMenuIcon from '~/svg/about-menu-icon.svg'
import ContactMenuIcon from '~/svg/contact-menu-icon.svg'
import ProjectsMenuIcon from '~/svg/projects-menu-icon.svg'

const iconWidth = 30
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
    targetSegment: 'projects',
    menuIcon: <ProjectsMenuIcon width={iconWidth} />
  },
  {
    menuLabel: 'Contato',
    path: '/contact',
    targetSegment: 'contact',
    menuIcon: <ContactMenuIcon width={iconWidth} />
  }
]

const Menu = () => {
  const activeSegment = useSelectedLayoutSegment()

  return (
    <nav className='bg-white border-[3px] border-solid border-secondary-50 rounded-[28px] rounded-b-none xs:rounded-[28px] xs:border-r-0 xs:rounded-r-none pt-4 pb-6 xs:py-6 xs:px-2 xs:mt-7 fixed xs:static bottom-0 left-0 right-0 flex flex-row justify-evenly items-center xs:flex-col xs:justify-center xs:gap-6'>
      {menuList.map(({ menuLabel, path, menuIcon, targetSegment }, index) => (
        <Fragment key={index}>
          <Link
            href={path}
            className={`menu-item ${
              activeSegment === targetSegment && 'menu-item-active'
            }`}
          >
            {menuIcon}
            {menuLabel}
          </Link>
          {index !== menuList.length - 1 && (
            <hr className='bg-secondary-25 rounded-[8px] min-w-[5px] min-h-[45px] xs:min-h-[1px] xs:w-full' />
          )}
        </Fragment>
      ))}
    </nav>
  )
}

export default Menu
