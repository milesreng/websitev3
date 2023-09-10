import React, { Component } from 'react'
import Modal from './Modal'

function Course(props) {
    return (
        <div className="flex flex-row border-white border-4 w-11/12 lg:w-5/12 my-4 rounded-md bg-bluegray hover:bg-dbluegray transition-all duration-500">
            <div className="overflow-hidden w-1/2 h-full relative">
                <img src={props.img} alt="" className="w-full h-full block top-0 left-0 object-cover rounded-md" />
            </div>
            <div className="flex flex-col w-3/4 justify-center p-2 text-center gap-1">
                <h1 className="text-xl text-navy">{props.code}</h1>
                <h2 className="uppercase text-navy">{props.title}</h2>
                <Modal title={props.title} desc={props.desc} buttonlabel="Open Course Description" className="z-50" />
            </div>
        </div>
    )
}

export default Course