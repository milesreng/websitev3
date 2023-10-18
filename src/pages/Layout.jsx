import React from 'react'
import './Layout.css'
import Navbar from '../components/NavBar'
import NavbarResponsive from '../components/NavbarResponsive'

const Layout = () => {
  return (
    <div className='w-full h-full flex flex-col md:flex-row'>
      <NavbarResponsive />
    </div>
  )
}
export default Layout