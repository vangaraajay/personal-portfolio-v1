import { useState } from 'react'
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import './App.css'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

function App() {

  return (
    <>
      <Navbar />
      <h1>Who am I?</h1>
      <p>Hi! I’m Ajay Vangara, a student developer at the University of Florida. I've built a variety of projects including full-stack web apps, mobile apps, and cloud-based systems, experimenting with AI and infrastructure along the way. 
        I love creating technology that can have a strong impact on society, both with the use of novel AI and without!</p>
      <p>Feel free to explore my skills and projects below, and don't hesitate to reach out if you'd like to connect!</p>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

export default App
