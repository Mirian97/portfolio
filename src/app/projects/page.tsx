import ProjectDivider from '@/components/ProjectDivider'
import Title from '@/components/Title'
import projects from '@/constants/projects'
import ProjectItem from './ProjectItem'

export const metadata = {
  title: 'Portfólio | Projetos',
  description: 'Portfólio pessoal de Mirian Quispe'
}

const Projects = () => {
  const renderVerticalDivider = (
    <ProjectDivider className='col-auto self-center hidden xs:flex' />
  )
  const renderHorizontalDivider = (
    <ProjectDivider orientation='horizontal' className='hidden xs:flex' />
  )
  return (
    <>
      <Title content='Projetos Recentes' />
      <div className='flex flex-col gap-6 xs:gap-[26px]'>
        <div className='project-grid-column'>
          <ProjectItem {...projects[0]} />
          {renderVerticalDivider}
          <ProjectItem {...projects[0]} />
        </div>
        {renderHorizontalDivider}
        <div className='project-grid-column'>
          <ProjectItem {...projects[0]} />
          {renderVerticalDivider}
          <ProjectItem {...projects[0]} />
        </div>
        {renderHorizontalDivider}
        <div className='project-grid-column'>
          <ProjectItem {...projects[0]} />
          {renderVerticalDivider}
          <ProjectItem {...projects[0]} />
        </div>
        {renderHorizontalDivider}
        <div className='project-grid-column'>
          <ProjectItem {...projects[0]} />
        </div>
        {renderHorizontalDivider}
      </div>
    </>
  )
}

export default Projects
