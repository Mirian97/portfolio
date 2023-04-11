import { Box } from '@mui/material'
import AboutMe from 'components/AboutMe'
import Background from 'components/Background'
import ContactMe from 'components/ContactMe'
import Drawer from 'components/Drawer'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Home from 'components/Home'
import Projects from 'components/Projects'

const Main = () => {
  return (
    <>
      <Header />
      <Drawer />
      <Home />
      <Box py={2} px={10}>
        <AboutMe />
        <Projects />
        <Background />
        <ContactMe />
      </Box>
      <Footer />
    </>
  )
}

export default Main
