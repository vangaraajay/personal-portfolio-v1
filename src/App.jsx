import { useState } from 'react'
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import './App.css'
import Navbar from '../components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <section id="projects">
        <h1 className="text-5xl">Projects</h1>
      </section>

      <section id="skills">
        <h1>Skills</h1>
      </section>

      <section id="contact">
        <h1>Contact</h1>
      </section>
      <h1>Hello World!</h1>
    </>
  )
}

export default App
