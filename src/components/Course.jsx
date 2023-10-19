/* eslint-disable react/prop-types */
import React from 'react'
import Modal from './Modal'

const Course = (props) => {
  return (
    <div className={`flex flex-row w-11/12 md:w-full lg:w-1/2 mr-2 my-4 rounded-md bg-gunmetal transition-all duration-500 h-48 ${!props.isLeft ? 'md:-mr-4' : 'md:-ml-4'}`}>
      <div className='overflow-hidden w-1/2 h-full relative'>
        <img src={props.img} alt='' className='w-full h-full block top-0 left-0 object-cover rounded-l-md' />
      </div>
      <div className='flex flex-col w-3/4 justify-center p-2 text-center gap-1 text-gunmetal-50 text-header text-xl md:text-md lg:text-lg'>
        <h1 className='text-xl'>{props.code}</h1>
        <h2 className='uppercase w-11/12 mx-auto text-sm'>{props.title}</h2>
        <Modal title={props.title} desc={props.desc} buttonlabel='Open Course Description' className='z-50' />
      </div>
    </div>
  )
}

export default Course