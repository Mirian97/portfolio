'use client'
import useWindowSize from '@/hooks/useWindowSize'
import { AnimatePresence, motion } from 'framer-motion'
import { FC, PropsWithChildren, useEffect, useState } from 'react'

const SectionTransition: FC<PropsWithChildren> = ({ children }) => {
  const { width } = useWindowSize()
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    if (width !== undefined) {
      setIsLargeScreen(width >= 1536)
    }
  }, [width])

  return (
    <div className='w-full'>
      <AnimatePresence>
        <motion.section
          initial={{ width: 0 }}
          exit={{ width: 0 }}
          animate={
            isLargeScreen
              ? {
                  width: 'auto',
                  transition: {
                    duration: 0.6,
                    ease: 'easeIn'
                  }
                }
              : false
          }
          className='card mt-8 mb-[117px] sm:mt-12 px-6 pb-8 sm:px-10 sm:h-[1100px] rounded-[28px] sm:rounded-none sm:border-l-0 lg:rounded-[28px] lg:rounded-l-none w-full overflow-y-auto overflow-x-hidden'
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.4, ease: 'easeInOut', delay: 0.3 }
            }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        </motion.section>
      </AnimatePresence>
    </div>
  )
}

export default SectionTransition
