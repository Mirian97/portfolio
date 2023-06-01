/* eslint-disable @next/next/no-page-custom-font */
import Menu from './Menu'
import Profile from './Profile'
import './globals.css'

export const metadata = {
  title: 'Portfólio | Sobre mim',
  description: 'Portfólio pessoal de Mirian Quispe'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='pt-br'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='pt-16 flex flex-col xs:flex-row xs:items-start xs:pl-[119px]'>
        <Menu />
        <Profile />
        <section className='card mt-12 px-6 pb-8 xs:px-10 min-h-[1045px] rounded-[28px] xs:border-l-0 xs:rounded-none'>
          {children}
        </section>
      </body>
    </html>
  )
}

export default RootLayout
