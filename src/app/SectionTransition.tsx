'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const variants = {
  fadeIn: {
    x: -600,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  },
  inactive: {
    x: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const SectionTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 1536

  return (
    <div className='w-full'>
      <AnimatePresence initial={false} mode='wait'>
        <motion.div
          key={pathname}
          variants={variants}
          initial={isLargeScreen ? 'fadeIn' : ''}
          animate={isLargeScreen ? 'inactive' : ''}
        >
          <section className='card mt-8 mb-[117px] sm:mt-12 px-6 pb-8 sm:px-10 sm:h-[1100px] rounded-[28px] sm:rounded-none sm:border-l-0 lg:rounded-[28px] lg:rounded-l-none w-full overflow-y-auto overflow-x-hidden'>
            {children}
          </section>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default SectionTransition
