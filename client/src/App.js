import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './CSS/App.css'

const App = () => {
  return(
    <>
      <Home />
      <About/>
      <Projects />
      <Contact />
    </>
  )
}

export default App;
