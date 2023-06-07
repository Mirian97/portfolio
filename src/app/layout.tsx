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
        <link rel='icon' href='./favicon.ico' />
      </head>
      <body className='flex flex-col pt-8 m-auto sm:flex-row sm:items-start sm:pl-5 sm:pt-16 md:pl-[119px] lg:justify-center lg:max-w-[1440px] lg:pl-0'>
        <Menu />
        <Profile />
        <section className='card mt-8 mb-[127px] sm:mt-12 px-6 pb-8 sm:px-10 sm:h-[1100px] rounded-[28px] sm:rounded-none sm:border-l-0 lg:rounded-[28px] lg:rounded-l-none w-full overflow-y-auto overflow-x-hidden'>
          {children}
        </section>
      </body>
    </html>
  )
}

export default RootLayout
