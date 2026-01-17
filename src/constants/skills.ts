import { generateIconUrl } from '@/utils/generateIconUrl'

export const skillIcons = {
  html: generateIconUrl('html'),
  css: generateIconUrl('css'),
  javascript: generateIconUrl('js'),
  typescript: generateIconUrl('ts'),
  react: generateIconUrl('react'),
  next: generateIconUrl('next'),
  angular: generateIconUrl('angular'),
  redux: generateIconUrl('redux'),
  jest: generateIconUrl('jest'),
  node: generateIconUrl('nodejs'),
  express: generateIconUrl('express'),
  java: generateIconUrl('java'),
  spring: generateIconUrl('spring'),
  php: generateIconUrl('php'),
  laravel: generateIconUrl('laravel'),
  postman: generateIconUrl('postman'),
  tailwind: generateIconUrl('tailwind'),
  mui: generateIconUrl('mui'),
  postgres: generateIconUrl('postgres'),
  mysql: generateIconUrl('mysql'),
  docker: generateIconUrl('docker'),
  linux: generateIconUrl('linux'),
  vscode: generateIconUrl('vscode'),
  git: generateIconUrl('git'),
  github: generateIconUrl('github'),
  styledComponents: generateIconUrl('styledcomponents'),
  netlify: generateIconUrl('netlify'),
  mySql: generateIconUrl('mysql'),
  vercel: generateIconUrl('vercel'),
  vue: generateIconUrl('vue'),
  nest: generateIconUrl('nest'),
  sass: generateIconUrl('sass'),
  mongodb: generateIconUrl('mongodb'),
  vite: generateIconUrl('vite')
}

const skills = [
  { name: 'HTML', site: 'https://html.com/', iconSource: skillIcons.html },
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
  { name: 'React', site: 'https://reactjs.org/', iconSource: skillIcons.react },
  { name: 'Next.js', site: 'https://nextjs.org/', iconSource: skillIcons.next },
  { name: 'Angular', site: 'https://angular.dev/', iconSource: skillIcons.angular },
  { name: 'Redux', site: 'https://react-redux.js.org/', iconSource: skillIcons.redux },
  { name: 'Jest', site: 'https://jestjs.io/', iconSource: skillIcons.jest },
  { name: 'Node.js', site: 'https://nodejs.org/en/', iconSource: skillIcons.node },
  { name: 'Express', site: 'https://express.com/', iconSource: skillIcons.express },
  { name: 'Java', site: 'https://java.com/', iconSource: skillIcons.java },
  {
    name: 'Spring Boot',
    site: 'https://spring.io/projects/spring-boot',
    iconSource: skillIcons.spring
  },
  { name: 'PHP', site: 'https://www.php.net/', iconSource: skillIcons.php },
  { name: 'Laravel', site: 'https://laravel.com/', iconSource: skillIcons.laravel },
  { name: 'Postman', site: 'https://www.postman.com/', iconSource: skillIcons.postman },
  {
    name: 'Tailwind CSS',
    site: 'https://tailwindcss.com/',
    iconSource: skillIcons.tailwind
  },
  { name: 'MUI', site: 'https://mui.com/', iconSource: skillIcons.mui },
  { name: 'PostgreSQL', site: 'https://postgres.com/', iconSource: skillIcons.postgres },
  { name: 'MySQL', site: 'https://www.mysql.com/', iconSource: skillIcons.mysql },
  { name: 'Docker', site: 'https://www.docker.com/', iconSource: skillIcons.docker },
  { name: 'Linux', site: 'https://www.linux.com/', iconSource: skillIcons.linux },
  {
    name: 'VSCode',
    site: 'https://code.visualstudio.com/',
    iconSource: skillIcons.vscode
  },
  { name: 'Git', site: 'https://git-scm.com/', iconSource: skillIcons.git },
  { name: 'GitHub', site: 'https://github.com/Mirian97', iconSource: skillIcons.github }
]

export default skills
