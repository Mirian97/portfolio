import { Sofia_Sans } from 'next/font/google'
import './globals.css'

const sofiaSans = Sofia_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfólio | Sobre mim',
  description: 'Portfólio pessoal de Mirian Quispe'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-br'>
      <body className={sofiaSans.className}>{children}</body>
    </html>
  )
}
