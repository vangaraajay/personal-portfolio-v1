import { useState } from 'react'
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import './App.css'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import About from '../components/About'
import SplashScreen from '../components/SplashScreen'

function App() {

  return (
    <div >
      <SplashScreen onFinish={() => {}} />
        <Navbar />
        <About />

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
    </div>
  )
}

export default App
