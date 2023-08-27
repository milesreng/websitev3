import React, { Component } from 'react'

function Course(props) {
    return (
        <div className="flex flex-col border-white border-2 p-4 w-1/4 m-auto">
            <img src={props.img} alt="" />
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <a href={props.url} target="_blank">view course page</a>
        </div>
    )
}

export default Course