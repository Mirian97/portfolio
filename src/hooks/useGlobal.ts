import { useContext } from 'react'
import GlobalContext from '../contexts/GlobalContext'

const useGlobal = () => {
  return useContext(GlobalContext)
}

export default useGlobal
