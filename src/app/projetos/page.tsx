import ProjectDivider from '@/components/ProjectDivider'
import Title from '@/components/Title'
import projects from '@/constants/projects'
import SectionTransition from '@/features/SectionTransition'
import ProjectItem from '../../components/ProjectItem'

export const metadata = {
  title: 'Mirian Quispe | Projetos',
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
        <div className='project-grid-column'>
          <ProjectItem {...projects[0]} />
          {renderVerticalDivider}
          <ProjectItem {...projects[1]} />
        </div>
        {renderHorizontalDivider}
        <div className='project-grid-column'>
          <ProjectItem {...projects[2]} />
          {renderVerticalDivider}
          <ProjectItem {...projects[3]} />
        </div>
        {renderHorizontalDivider}
        <div className='project-grid-column'>
          <ProjectItem {...projects[4]} />
          {renderVerticalDivider}
          <ProjectItem {...projects[5]} />
        </div>
        {renderHorizontalDivider}
        <div className='project-grid-column'>
          <ProjectItem {...projects[6]} />
        </div>
      </div>
    </SectionTransition>
  )
}

export default Projects
