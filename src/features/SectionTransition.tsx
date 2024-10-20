'use client'
import useWindowSize from '@/hooks/useWindowSize'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren, useEffect, useState } from 'react'

const SectionTransition: FC<PropsWithChildren> = ({ children }) => {
  const { width } = useWindowSize()
  const pathname = usePathname()
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    if (width !== undefined) {
      setIsLargeScreen(width >= 1536)
    }
  }, [width])

  return (
    <div className='w-full'>
      <AnimatePresence initial={false} mode='wait'>
        <motion.div
          key={pathname}
          initial={{
            width: isLargeScreen ? 0 : 'auto',
            opacity: isLargeScreen ? 0 : 1
          }}
          exit={{ width: isLargeScreen ? 0 : 'auto', opacity: isLargeScreen ? 0 : 1 }}
          animate={{ width: 'auto', opacity: 1 }}
          transition={{ duration: 0.8 }}
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
