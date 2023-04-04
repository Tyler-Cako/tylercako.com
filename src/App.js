import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './CSS/App.css'

const App = () => {
  //Test github pages commit
  return(
    <>
      <div className="photo-container">
        <div className="photo"/>
      </div>
      <Home />
      <About/>
      <Projects />
      <Contact />
    </>
  )
}

export default App;
