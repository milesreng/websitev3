import React from 'react'
import headshot from '../assets/headshot.jpg'

const Home = () => {
  return (
    <div className='h-full flex flex-col justify-center'>
      <div className='flex flex-col h-screen lg:flex-row lg:gap-4 text-gunmetal w-11/12 items-center m-auto'>
        <div className='block lg:hidden w-1/2 border-white border-4 rounded-full mt-24 lg:mt-0'>
          <img className='overflow-hidden rounded-full'   
            src={headshot} alt='Miles in a suit smiling' />
        </div>
        <div className='text-2xl sm:text-3xl md:text-2xl lg:text-4xl text-center lg:text-right mt-8 sm:mt-24 lg:mt-0 w-11/12 md:w-3/4 lg:pl-20 md:pr-8'>
          <h3 className='text-5xl'>Hi! I&apos;m Miles,</h3>
          <h3 className=''>
           a junior 
            at Duke University. I&apos;m passionate about <span className='font-bold'> leveraging technology </span>
            to create a more equitable future.</h3>
        
        </div>
        <div className='hidden lg:block w-1/4 m-auto border-beige border-4 rounded-full'>
          <img className='overflow-hidden rounded-full'
            src={headshot} alt='Miles in a suit smiling' />
        </div>
        
      </div>
    </div>
  )
}

export default Home