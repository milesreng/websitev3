import React, { Component } from 'react'
import Experience from '../components/Experience'

class Work extends Component {
  render() {
    return (
      <div>
        <div className='text-white flex flex-col min-h-screen gap-8'>
          <h3 className='flex md:hidden text-4xl font-header pl-4 tracking-wide'>Experience</h3>
          <Experience />
        </div>
                
      </div>
    )
  }
}

export default Work