/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Linkedin } from '../assets/linkedin.svg'
import { ReactComponent as Github } from '../assets/github.svg'
// import { SpotifyNowPlaying } from './SpotifyNowPlaying'
import Resume from '../assets/Miles_Eng_resume.pdf'

class Navbar extends Component {
  render() {
    return (
      <div className='w-full flex flex-col md:flex-row h-full'>
        <div className='flex flex-row md:flex-col md:fixed top-0 left-0 md:h-screen md:w-1/4 lg:w-1/6 w-full m-0 py-4 md:py-8 px-4 md:px-10 shadow justify-between border-b-2 md:border-r-2 md:border-b-0 border-gunmetal-900'>
          <div className='flex flex-col gap-2 md:gap-6 text-white uppercase text-center'>
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
              <a href={Resume} target='_blank'>Resume</a>
            </div>
            <div className='flex fill-white  justify-around'>
                        
              <a href='https://www.linkedin.com/in/milesreng/' target='_blank'>
                <Linkedin className='fill-bluegray-700 hover:fill-gunmetal-700 transition-colors w-6' /> 
              </a>
              <a href='https://github.com/milesreng' target='_blank'>
                <Github className='fill-bluegray-700 hover:fill-gunmetal-700 transition-colors w-6' />
              </a>
            </div>
          </div>
                    
        </div>
        <div className='md:pl-64 lg:pl-80 lg:pr-8 w-full pt-8 pl-0 text-center md:text-left'>
          <Outlet />
        </div>
      </div>

    // <div className='nav w-5/6 mx-auto bg-navy text-white font-jos-sans uppercase flex flex-row justify-between p-8'>
    //     <div className='basis-1/6 flex flex-row gap-8'>
    //         <a href=''>
    //             <Linkedin className='fill-white hover:fill-beige transition-colors w-6' /> 
    //         </a>
    //         <a href=''>
    //             <Github className='fill-white hover:fill-beige transition-colors w-6' />
    //         </a>
    //     </div>
    //     <div className='basis-1/2 flex flex-col md:flex-row justify-around text-m gap-4'>
    //         <a className='hover:text-beige font-jos-slab' href='#about'>About</a>
    //         <a className='hover:text-beige' href=''>Skills</a>
    //         <a className='hover:text-beige' href=''>Experience</a>
    //         <a className='hover:text-beige' href=''>Coursework</a>
    //         <a className='hover:text-beige' href=''>Contact</a>
    //     </div>
    // </div>
    )
  }
}

export default Navbar