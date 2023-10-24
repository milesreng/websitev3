/* eslint-disable react/prop-types */
import React from 'react'
import MiniSkill from './MiniSkill'

const Project = (props) => {
  return (
    <div className='basis-full md:basis-1/2 text-left p-4'>
      <div className='flex flex-row bg-bluegray-50 rounded-md shadow-md h-full p-1'>
        <div className='basis-1/2 md:basis-1/3'> 
          <img src={props.img} alt={props.title}
            className='overflow-hidden object-cover h-full rounded-md' />
        </div>
        <div className='pl-4 basis-1/2 md:basis-2/3 flex flex-col h-full justify-between'>
          <div className='pb-4'>
            <h1 className='font-header text-2xl pt-2'>{props.title}</h1>
            <p>{props.desc}</p>
            <a href={props.link} target='_blank' rel='noreferrer'
              className='underline hover:text-gunmetal-600 transition-all duration-200'>
              explore project
            </a>
          </div>
          <div className={`flex flex-row gap-1 ${props.lightSkills ? 'bg-bluegray-200' : 'bg-bluegray-800'} ${props.languages.length > 2 ? 'w-1/2' : 'w-1/3'} justify-around rounded-full p-1 mb-2`}>
            {props.languages.map(lang => (
              <MiniSkill key={lang} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project