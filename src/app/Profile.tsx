import Avatar from '~/svg/avatar.svg'
import Dots from '~/svg/dots.svg'
import KeyLeft from '~/svg/key-left.svg'
import KeyRight from '~/svg/key-right.svg'

const Profile = () => {
  const renderAvatarSection = () => (
    <section className='w-full h-[348px] relative'>
      <KeyLeft height={118} className='absolute top-0 left-[58px]' />
      <Avatar width={287} className='m-auto pt-2' />
      <Dots width={67} className='absolute bottom-8 right-[174px]' />
      <KeyRight height={118} className='absolute bottom-0 right-[58px]' />
    </section>
  )

  return (
    <aside className='card border-3 rounded-[28px] w-[604px] px-8 pb-8 leading-[29px]'>
      {renderAvatarSection()}
      <section className='mt-8'>
        <h1 className='text-2xl text-primary-200 mb-[10px]'>
          Olá, sou Mirian Quispe e...
        </h1>
        <h1 className='text-5xl font-bold leading-[58px]'>Desenvolvedora</h1>
        <h1 className='text-4xl font-medium text-primary-200 leading-[48px]'>
          Full Stack
        </h1>
      </section>
    </aside>
  )
}

export default Profile
