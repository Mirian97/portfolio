/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import ViewIcon from '~/svg/view-icon.svg'

export interface ProjectItemProps {
  name: string
  description: string
  skills: string[]
  imagePath: string
  site: string
}

const ProjectItem = ({
  name,
  description,
  skills,
  imagePath,
  site
}: ProjectItemProps) => (
  <div>
    <Link className='project-link cursor-pointer' href={site} target='_blank'>
      <h3 className='project-title'>{name}</h3>
      <div className='relative w-full overflow-hidden aspect-[11/10] '>
        <img
          src={imagePath}
          alt='Imagem do projeto'
          className='transform duration-300 w-full h-full object-cover'
        />
        <ViewIcon
          width={40}
          className='absolute z-[1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0'
        />
        <div className='image-overlay' />
      </div>
    </Link>
    <div className='flex flex-row flex-wrap justify-center gap-1 py-4'>
      {skills.map((url, index) => (
        <img key={index} src={url} alt='Tecnologia' className='w-[25px]' />
      ))}
    </div>
    <p className='text-sm leading-[17px] text-secondary-300'>{description}</p>
  </div>
)

export default ProjectItem
