import { useState } from 'react'

import './App.css'
import Tic from './Components/Tic'
import TopHeader from './Components/TopHeader'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import AboutSection from './Components/AboutSection'
import AboutBelow from './Components/AboutBelow'
import ThreeBoxes from './Components/ThreeBoxes'
import Footer from './Components/Footer'

function App() {
  return (
    <>
    
    <TopHeader/>
    <Header/>
    <HeroSection/>
    <AboutSection/>
    <AboutBelow/>
    <ThreeBoxes/>
    <Footer/>
    </>
  )
}

export default App
