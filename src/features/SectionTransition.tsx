'use client'
import useWindowSize from '@/hooks/useWindowSize'
import { AnimatePresence, motion } from 'framer-motion'
import { FC, PropsWithChildren, useEffect, useState } from 'react'

const SectionTransition: FC<PropsWithChildren> = ({ children }) => {
  const { width } = useWindowSize()
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1535 : false
  )

  useEffect(() => {
    if (width !== undefined) {
      setIsLargeScreen(width >= 1536)
    }
  }, [width])

  return (
    <div className='w-full'>
      <AnimatePresence mode='wait'>
        <motion.section
          initial={isLargeScreen ? { width: 0 } : false}
          exit={{ width: 0 }}
          animate={
            isLargeScreen
              ? {
                  width: 'auto',
                  transition: {
                    duration: 0.5,
                    ease: 'easeIn'
                  }
                }
              : false
          }
          className='card mt-8 mb-[117px] sm:mt-12 px-6 pb-8 sm:px-10 sm:h-[1100px] rounded-[28px] sm:rounded-none sm:border-l-0 lg:rounded-[28px] lg:rounded-l-none w-full overflow-y-auto overflow-x-hidden'
        >
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: 'easeInOut', delay: 0.3 }
            }}
            exit={{ opacity: 0, y: 15 }}
          >
            {children}
          </motion.div>
        </motion.section>
      </AnimatePresence>
    </div>
  )
}

export default SectionTransition
