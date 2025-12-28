import { useState } from 'react'
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1>Hello World!</h1>
  )
}

export default App
