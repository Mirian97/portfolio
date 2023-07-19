import { Sofia_Sans } from 'next/font/google'
import Menu from './Menu'
import Profile from './Profile'
import SectionTransition from './SectionTransition'
import './globals.css'

const sofiaSans = Sofia_Sans({
  subsets: ['latin'],
  fallback: ['sans-serif'],
  weight: ['400', '500', '700'],
  display: 'swap'
})

export const metadata = {
  title: 'Portfólio | Sobre mim',
  description: 'Portfólio pessoal de Mirian Quispe'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='pt-br'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='icon' href='./favicon.ico' />
      </head>
      <body
        className={`${sofiaSans.className} flex flex-col pt-8 m-auto sm:flex-row sm:items-start sm:pl-5 sm:pt-16 md:pl-[119px] lg:justify-center lg:max-w-[1440px] lg:pl-0`}
      >
        <Menu />
        <Profile />
        <SectionTransition>{children}</SectionTransition>
      </body>
    </html>
  )
}

export default RootLayout
