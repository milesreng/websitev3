import { useState } from 'react'
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Coursework from './pages/Coursework'
import Contact from './pages/Contact'
import Resume from './components/Resume'

import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="experience" element={<Experience />} />
      <Route path="coursework" element={<Coursework />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route path="resume" element={<Resume />} /> */}
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
