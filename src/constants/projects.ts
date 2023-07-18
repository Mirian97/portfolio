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
  vue
} = skillIcons

const projects = [
  {
    name: 'Fluxo de caixa',
    skills: [react, javascript, html, css, mui, node, express, mySql, vercel],
    description:
      'Gerenciamento de fluxo de caixa, controle das entradas, saídas, clientes e categorias registradas do negócio.',
    imagePath: '/image/cash-flow-project.png',
    site: 'https://fluxodecaixa.nalupetvet.com.br/'
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
    skills: [react, typescript, react, mui, html, css, netlify],
    description:
      'Carrinho de compras onde é possível adicionar e remover um produto ou limpá-lo completamente após a confirmação do usuário.',
    imagePath: '/image/cart-store-project.png',
    site: 'https://cart-store.netlify.app/'
  },
  {
    name: 'Mejor con salud',
    skills: [react, javascript, mui, html, css, netlify],
    description:
      'Site com uma variedade de artigos e informações relevantes sobre saúde e bem-estar para ficar atualizado.',
    imagePath: '/image/mejor-con-salud-project.png',
    site: 'https://mejor-con-salud.netlify.app/'
  }
]

export default projects
