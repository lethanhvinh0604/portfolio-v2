import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Video from './components/Video'
import ParticleBackground from './components/ParticleBackground'

import Home from './pages/home/Home'
import Project from './pages/project/Project'
import About from './pages/certificate/Certificate'
import Contact from './pages/contact/Contact'

import styled from 'styled-components'
import Sticky from 'react-sticky-el'
import GlobalStyles from './GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <ParticleBackground />
      <StickyWrapper>
        <Sticky>
          <Navbar />
        </Sticky>
      </StickyWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/certificate" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

const StickyWrapper = styled.div`
  position: relative;
  z-index: 1000; /* Đảm bảo Sticky không bị đè lên */
`

export default App
