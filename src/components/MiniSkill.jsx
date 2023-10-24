/* eslint-disable react/prop-types */
import React from 'react'

const MiniSkill = (props) => {
  console.log(props.lang)
  return (
    <div className='w-6' title={props.lang}>
      <img src={`https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/${props.lang}/${props.lang}-original.svg`} 
        alt={`${props.lang} logo`}
        className='' />
    </div>
  )
}

export default MiniSkill