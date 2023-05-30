import Profile from './Profile'
import './globals.css'

export const metadata = {
  title: 'Portfólio | Sobre mim',
  description: 'Portfólio pessoal de Mirian Quispe'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='pt-br'>
      <body>
        <Profile />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
