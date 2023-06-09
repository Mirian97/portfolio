import { generateIconUrl } from '@/utils/generateIconUrl'

export const skillIcons = {
  html: generateIconUrl('html'),
  css: generateIconUrl('css'),
  javascript: generateIconUrl('js'),
  typescript: generateIconUrl('ts'),
  react: generateIconUrl('react'),
  redux: generateIconUrl('redux'),
  node: generateIconUrl('nodejs'),
  express: generateIconUrl('express'),
  next: generateIconUrl('next'),
  mui: generateIconUrl('mui'),
  styledComponents: generateIconUrl('styledcomponents'),
  tailwind: generateIconUrl('tailwind'),
  bootstrap: generateIconUrl('bootstrap'),
  sass: generateIconUrl('sass'),
  postgres: generateIconUrl('postgres'),
  netlify: generateIconUrl('netlify'),
  vercel: generateIconUrl('vercel'),
  vsCode: generateIconUrl('vscode')
}

const skills = [
  {
    name: 'HMTL',
    site: 'https://html.com/',
    iconSource: skillIcons.html
  },
  {
    name: 'CSS',
    site: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    iconSource: skillIcons.css
  },
  {
    name: 'JavaScript',
    site: 'https://www.javascript.com/',
    iconSource: skillIcons.javascript
  },
  {
    name: 'TypeScript',
    site: 'https://www.typescriptlang.org/',
    iconSource: skillIcons.typescript
  },
  {
    name: 'React',
    site: 'https://reactjs.org/',
    iconSource: skillIcons.react
  },
  {
    name: 'Redux',
    site: 'https://react-redux.js.org/',
    iconSource: skillIcons.redux
  },
  {
    name: 'Node.js',
    site: 'https://nodejs.org/en/',
    iconSource: skillIcons.node
  },
  {
    name: 'Express',
    site: 'https://expressjs.com/pt-br/',
    iconSource: skillIcons.express
  },
  {
    name: 'Next.js',
    site: 'https://nextjs.org/',
    iconSource: skillIcons.next
  },
  {
    name: 'MUI',
    site: 'https://mui.com/',
    iconSource: skillIcons.mui
  },
  {
    name: 'Styled Components',
    site: 'https://styled-components.com/',
    iconSource: skillIcons.styledComponents
  },
  {
    name: 'Tailwind CSS',
    site: 'https://tailwindcss.com/',
    iconSource: skillIcons.tailwind
  },
  {
    name: 'Bootstrap',
    site: 'https://getbootstrap.com.br/docs/4.1/getting-started/introduction/',
    iconSource: skillIcons.bootstrap
  },
  {
    name: 'Sass',
    site: 'https://sass-lang.com/',
    iconSource: skillIcons.sass
  },
  {
    name: 'PostgreSQL',
    site: 'https://postgres.com/',
    iconSource: skillIcons.postgres
  },
  {
    name: 'Netlify',
    site: 'https://netlify.com/',
    iconSource: skillIcons.netlify
  },
  {
    name: 'Vercel',
    site: 'https://vercel.com/',
    iconSource: skillIcons.vercel
  },
  {
    name: 'VSCode',
    site: 'https://code.visualstudio.com/docs',
    iconSource: skillIcons.vsCode
  }
]

export default skills
