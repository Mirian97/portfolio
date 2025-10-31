import { ProjectItemProps } from '@/components/ProjectItem'
import { skillIcons } from './skills'

const {
  mui,
  react,
  javascript,
  html,
  css,
  postgres,
  node,
  express,
  netlify,
  next,
  tailwind,
  typescript,
  mySql,
  vercel,
  vue,
  nest,
  docker,
  angular,
  sass,
  mongodb
} = skillIcons

const projects = [
  {
    name: 'Guardians - Aluguel de Carros',
    skills: [typescript, nest, angular, html, tailwind, mongodb, docker, vercel, netlify],
    description:
      'Sistema de aluguel de carros, permitindo que usuários consultem veículos disponíveis, realizem reservas e acompanhem o processo de locação.',
    imagePath: '/image/guardians-project.png',
    site: 'https://car-reservation-system.netlify.app/'
  },
  {
    name: 'Engenheiro Civil Website',
    skills: [angular, typescript, html, sass, vercel],
    description:
      'Site pessoal de um Engenheiro Civil, apresentando seus serviços, projetos e informações de contato.',
    imagePath: '/image/civil-engineering-project.png',
    site: 'https://elio-rodrigues-ferreira-engenharia.vercel.app/'
  },
  {
    name: 'Simulador Consumo de Energia',
    skills: [typescript, nest, next, tailwind, postgres, docker, vercel],
    description:
      'Simulador de compensação de energia que permite calcular o valor da conta de energia elétrica com base no consumo mensal e na tarifa de energia.',
    imagePath: '/image/compensation-energy-simulator-project.png',
    site: 'https://compensation-simulator-web.vercel.app/'
  },
  {
    name: 'Fluxo de caixa',
    skills: [react, javascript, html, css, mui, node, express, mySql, vercel],
    description:
      'Gerenciamento de fluxo de caixa, controle das entradas, saídas, clientes e categorias registradas do negócio.',
    imagePath: '/image/cash-flow-project.png',
    site: 'https://fluxodecaixa.nalupetvet.com.br/'
  },
  {
    name: 'Covid-19 no Brasil',
    skills: [next, typescript, tailwind, html, css, vercel],
    description:
      'Dashboard que exibe informações atualizadas sobre a Covid-19 no Brasil, incluindo casos confirmados, mortes e recuperações por estado, data e em outros paises.',
    imagePath: '/image/covid-dashboard-project.png',
    site: 'https://covid19-brazil-tracker.vercel.app/'
  },
  {
    name: 'MiCripto',
    skills: [vue, javascript, html, css, node, express, postgres, netlify, vercel],
    description:
      'Faça o cadastro e login para acessar informações atualizadas sobre as 10 melhores criptomoedas do mercado.',
    imagePath: '/image/my-crypto-project.png',
    site: 'https://mi-cripto.netlify.app/'
  },
  {
    name: 'Pigback Finance',
    skills: [react, javascript, html, css, mui, node, express, postgres, netlify],
    description:
      'Gerenciamento de cobranças (pagas, pendentes vencidas dos clientes) cadastrados pela empresa.',
    imagePath: '/image/pigback-finance-project.png',
    site: 'https://pigback-finance.netlify.app/'
  },
  {
    name: 'Cripto Coins',
    skills: [react, typescript, next, tailwind, html, css, netlify],
    description:
      'Visualize de forma prática as principais criptomoedas e seus dados mais recentes, incluindo o nome da criptomoeda, o preço atual em reais e a variação percentual nas últimas 24 horas.',
    imagePath: '/image/crypto-coins-project.png',
    site: 'https://mq-crypto-coins.netlify.app/'
  },
  {
    name: 'Post blog',
    skills: [react, typescript, mui, html, css, netlify],
    description:
      'No site Post Blog, você pode criar uma conta, fazer login e começar a compartilhar suas próprias postagens.',
    imagePath: '/image/post-blog-project.png',
    site: 'https://codeleap-mirian-quispe.netlify.app/'
  },
  {
    name: 'Cart store',
    skills: [react, typescript, mui, html, css, netlify],
    description:
      'Carrinho de compras onde é possível adicionar e remover um produto ou limpá-lo completamente após a confirmação do usuário.',
    imagePath: '/image/cart-store-project.png',
    site: 'https://cart-store.netlify.app/'
  }
]

export const projectPairs: ProjectItemProps[][] = []

for (let i = 0; i < projects.length; i += 2) {
  projectPairs.push(projects.slice(i, i + 2))
}
