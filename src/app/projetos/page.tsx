import ProjectDivider from '@/components/ProjectDivider'
import Title from '@/components/Title'
import { projectPairs } from '@/constants/projects'
import SectionTransition from '@/features/SectionTransition'
import ProjectItem from '../../components/ProjectItem'

export const metadata = {
  title: 'Mirian Quispe | Full Stack Developer | Back-end | Front-end',
  description:
    'Explore o portfólio de Mirian Quispe, desenvolvedora apaixonada por criar soluções digitais inovadoras. Conheça meus projetos.'
}

const Projects = () => {
  const renderVerticalDivider = (
    <ProjectDivider className='col-auto self-center hidden xs:flex' />
  )
  const renderHorizontalDivider = (
    <ProjectDivider orientation='horizontal' className='hidden xs:flex' />
  )
  return (
    <SectionTransition>
      <Title content='Projetos Recentes' />
      <div className='flex flex-col gap-6 mt-8 xs:gap-[26px]'>
        {projectPairs.map((pair, index) => (
          <div
            key={`project-row-${pair?.[0]?.description}`}
            className='project-grid-column'
          >
            <ProjectItem {...pair[0]} />
            {pair[1] && renderVerticalDivider}
            {pair[1] && <ProjectItem {...pair[1]} />}
            {index < projectPairs.length - 1 && renderHorizontalDivider}
          </div>
        ))}
      </div>
    </SectionTransition>
  )
}

export default Projects
