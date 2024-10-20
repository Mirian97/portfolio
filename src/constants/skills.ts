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
  vite: generateIconUrl('vite'),
  vue: generateIconUrl('vue'),
  mySql: generateIconUrl('mysql'),
  angular: generateIconUrl('angular'),
  jest: generateIconUrl('jest'),
  postman: generateIconUrl('postman'),
  vscode: generateIconUrl('vscode'),
  git: generateIconUrl('git'),
  github: generateIconUrl('github')
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
    name: 'Vue.js',
    site: 'https://vuejs.org/',
    iconSource: skillIcons.vue
  },
  {
    name: 'Next.js',
    site: 'https://nextjs.org/',
    iconSource: skillIcons.next
  },
  {
    name: 'Angular.js',
    site: 'https://angular.dev/',
    iconSource: skillIcons.angular
  },
  {
    name: 'Redux',
    site: 'https://react-redux.js.org/',
    iconSource: skillIcons.redux
  },
  {
    name: 'Jest',
    site: 'https://jestjs.io/pt-BR/docs/getting-started',
    iconSource: skillIcons.jest
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
    name: 'Postman',
    site: 'https://www.postman.com/',
    iconSource: skillIcons.postman
  },
  {
    name: 'Tailwind CSS',
    site: 'https://tailwindcss.com/',
    iconSource: skillIcons.tailwind
  },
  {
    name: 'MUI',
    site: 'https://mui.com/',
    iconSource: skillIcons.mui
  },
  {
    name: 'PostgreSQL',
    site: 'https://postgres.com/',
    iconSource: skillIcons.postgres
  },
  {
    name: 'MySQL',
    site: 'https://www.mysql.com/',
    iconSource: skillIcons.mySql
  },
  {
    name: 'VSCode',
    site: 'https://code.visualstudio.com/docs',
    iconSource: skillIcons.vscode
  },
  {
    name: 'Git',
    site: 'https://git-scm.com/doc',
    iconSource: skillIcons.git
  },
  {
    name: 'Github',
    site: 'https://github.com/Mirian97',
    iconSource: skillIcons.github
  }
]

export default skills
