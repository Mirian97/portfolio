import Main from 'pages/Main'
import { Route, Routes } from 'react-router-dom'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  )
}

export default MainRoutes
