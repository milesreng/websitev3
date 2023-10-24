import React from 'react'
import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Linkedin } from '../assets/linkedin.svg'
import { ReactComponent as Github } from '../assets/github.svg'
import { ReactComponent as Menu } from '../assets/menu-gunmetal.svg'
import Resume from '../assets/Miles_Eng_resume.pdf'

const NavbarResponsive = () => {
  const [navExpanded, setNavExpanded] = useState(false)

  const handleExpand = () => {
    setNavExpanded(!navExpanded)
  }

  return (
    <div className='flex flex-col md:flex-row justify-between w-full font-content gap-4'>
      <div className='md:basis-1/6 font-header'>
        <div className='md:hidden max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4'>
          <button type='button' onClick={handleExpand}
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-bluegray-200 mb-4'>
            <span className='sr-only'>Open main menu</span>
            <div className='rounded-md'>
              <Menu className='w-10 h-10' />
            </div>
            {/* <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15'/>
              </svg> */}
          </button>
          
          {navExpanded && 
          (<div className='md:hidden flex flex-row w-full justify-between border-y-2 py-4 border-gunmetal text-xl px-2'>
            <div className='flex flex-col gap-2 md:gap-6 text-gunmetal uppercase text-center'>
              {/* <SpotifyNowPlaying /> */}
              <Link to='/'>
                <p className='text-gunmetal hover:font-bold'>Home</p>
              </Link>
              <Link to='/experience'>
                <p className='text-gunmetal hover:font-bold'>Experience</p>
              </Link>
              <Link to='/coursework'>
                <p className='text-gunmetal hover:font-bold'>Coursework</p>
              </Link>
              <Link to='/contact'>
                <p className='text-gunmetal hover:font-bold'>Contact</p>
              </Link>
            </div>
            <div className='flex flex-col justify-around'>
              <div className='border-solid border-white border-2  md:my-8 px-auto pb-1 pt-2 px-2 bg-gunmetal
                                        hover:bg-gunmetal-900 hover:font-bold transition-all duration-200 cursor-pointer text-gunmetal-50 uppercase text-center'>
                {/* <Link to='/resume'>
                                <p>Resume</p>
                            </Link> */}
                <a href={Resume} target='_blank' rel="noreferrer">Resume</a>
              </div>
              <div className='flex fill-white  justify-around'>
                        
                <a href='https://www.linkedin.com/in/milesreng/' target='_blank' rel="noreferrer">
                  <Linkedin className='fill-bluegray-700 hover:fill-gunmetal-700 transition-colors w-6' /> 
                </a>
                <a href='https://github.com/milesreng' target='_blank' rel="noreferrer">
                  <Github className='fill-bluegray-700 hover:fill-gunmetal-700 transition-colors w-6' />
                </a>
              </div>
            </div>
                    
          </div>)
          }
          
        </div>
        <div className='hidden text-xl md:flex flex-row md:flex-col md:fixed top-0 left-0 md:h-screen m-0 py-4 md:py-8 px-4 md:px-10 shadow justify-between border-b-2 md:border-b-0 border-gunmetal-900 md:border-r-2 md:border-gunmetal-50'>
          <div className='flex flex-col gap-2 md:gap-6 text-gunmetal uppercase mx-auto text-center'>
            {/* <SpotifyNowPlaying /> */}
            <Link to='/'>
              <p className='text-gunmetal hover:font-bold text-center'>Home</p>
            </Link>
            <Link to='/experience'>
              <p className='text-gunmetal hover:font-bold'>Experience</p>
            </Link>
            <Link to='/coursework'>
              <p className='text-gunmetal hover:font-bold'>Coursework</p>
            </Link>
            <Link to='/portfolio'>
              <p className='text-gunmetal hover:font-bold'>Projects + Skills</p>
            </Link>
            <Link to='/contact'>
              <p className='text-gunmetal hover:font-bold'>Contact</p>
            </Link>
          </div>
          <div className='flex flex-col justify-around'>
            <div className='rounded-md md:my-8 px-auto pb-1 pt-2 px-8 bg-gunmetal
                                          hover:bg-gunmetal-900 hover:font-bold transition-all duration-200 cursor-pointer text-gunmetal-50 uppercase text-center'>
              {/* <Link to='/resume'>
                                  <p>Resume</p>
                              </Link> */}
              <a href={Resume} target='_blank' rel="noreferrer">Resume</a>
            </div>
            <div className='flex fill-white  justify-around'>
                          
              <a href='https://www.linkedin.com/in/milesreng/' target='_blank' rel="noreferrer">
                <Linkedin className='fill-bluegray-700 hover:fill-gunmetal-700 transition-colors w-6' /> 
              </a>
              <a href='https://github.com/milesreng' target='_blank' rel="noreferrer">
                <Github className='fill-bluegray-700 hover:fill-gunmetal-700 transition-colors w-6' />
              </a>
            </div>
          </div>
                      
        </div>
      </div>
      <div className='w-full text-center mx-auto basis-full md:basis-5/6 lg:basis-3/4'>
        <Outlet />
      </div>
    </div>
    
  )
}

export default NavbarResponsive