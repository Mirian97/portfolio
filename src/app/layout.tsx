/* eslint-disable @next/next/no-page-custom-font */
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
      <body>
        <Profile />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
