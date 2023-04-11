import { useState } from 'react'

const useGlobalContextProvider = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  const handleToggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  return {
    openDrawer,
    handleToggleDrawer
  }
}

export default useGlobalContextProvider
