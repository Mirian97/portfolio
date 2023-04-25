import { Box, styled } from '@mui/material'
import AboutMe from 'components/AboutMe'
import Background from 'components/Background'
import ContactMe from 'components/ContactMe'
import Drawer from 'components/Drawer'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Home from 'components/Home'
import Projects from 'components/Projects'

const StyledSectionMain = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 10),

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 2)
  }
}))

const Main = () => {
  return (
    <>
      <Header />
      <Drawer />
      <Home />
      <StyledSectionMain>
        <AboutMe />
        <Projects />
        <Background />
        <ContactMe />
      </StyledSectionMain>
      <Footer />
    </>
  )
}

export default Main
