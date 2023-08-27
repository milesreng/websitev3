import React, { Component } from 'react'

function Course(props) {
    return (
        <div className="flex flex-col border-white border-2 w-5/6 m-auto">
            <div className="flex flex-row gap-2">
                <img src={props.img} alt="" className="w-1/4" />
                <div className="flex flex-col w-3/4 justify-center">
                    <h2 className="p-2">{props.title}</h2>
                    <p className="p-2">{props.desc}</p>
                    <a className="p-2" href={props.url} target="_blank">view course page</a>
                </div>

            </div>
        </div>
    )
}

export default Course