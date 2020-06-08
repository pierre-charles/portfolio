import React, { Component } from 'react'
import Home from './components/Home'
import Particles from './components/Particles'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='mx-4'>
      <Particles />
      <Home />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default App