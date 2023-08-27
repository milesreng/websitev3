import { useState } from 'react'
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Coursework from './pages/Coursework'
import Contact from './pages/Contact'

import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="experience" element={<Projects />} />
      <Route path="coursework" element={<Coursework />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

function App({ routes }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={ router } />
    </>
  )
}

export default App
