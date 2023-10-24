import React, { useState } from 'react'
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import Coursework from './pages/Coursework'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='experience' element={<Work />} />
      <Route path='coursework' element={<Coursework />} />
      <Route path='contact' element={<Contact />} />
      <Route path='portfolio' element={<Portfolio />} />
      {/* <Route path='resume' element={<Resume />} /> */}
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
