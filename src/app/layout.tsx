import Menu from '@/features/Menu'
import Profile from '@/features/Profile'
import { Metadata } from 'next'
import { Sofia_Sans } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'
import './globals.css'

const sofiaSans = Sofia_Sans({
  subsets: ['latin'],
  fallback: ['sans-serif'],
  weight: ['400', '500', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Mirian Quispe | Full Stack Developer | Back-end | Front-end',
  description:
    'Conheça o portfólio de Mirian Quispe, desenvolvedora apaixonada por criar soluções digitais inovadoras. Explore projetos, habilidades e minha trajetória profissional.',
  keywords: [
    'Mirian Quispe',
    'Mirian Quispe Montevilla',
    'portfólio desenvolvedora',
    'projetos web',
    'desenvolvimento front-end',
    'desenvolvimento full-stack',
    'programadora',
    'desenvolvedora',
    'desenvolvedora web'
  ],
  openGraph: {
    title: 'Portfólio de Mirian Quispe | Projetos e Sobre Mim',
    description:
      'Descubra os projetos e a trajetória de Mirian Quispe, desenvolvedora especializada em soluções digitais criativas e funcionais.',
    url: 'https://mirian-quispe.netlify.app/',
    siteName: 'Portfólio de Mirian Quispe',
    images: [
      {
        url: '/image/avatar.png',
        alt: 'Portfólio de Mirian Quispe',
        width: 500
      }
    ],
    locale: 'pt_BR',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://mirian-quispe.netlify.app'
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ff6563',
  icons: {
    icon: '/favicon.ico'
  },
  other: {
    'google-site-verification': 'wjBO55YZ0JG4C3UKYYobNyzjQi6R-Eae3YyBYG87uYM'
  }
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='pt-br'>
      <body
        className={`${sofiaSans.className} flex flex-col pt-8 m-auto sm:flex-row sm:items-start sm:pl-5 sm:pt-16 md:pl-[119px] lg:justify-center lg:max-w-[1440px] lg:pl-0`}
      >
        <Menu />
        <Profile />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
