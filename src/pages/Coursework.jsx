import React, { Component } from 'react'
import Course from '../components/Course'

class Coursework extends Component {
    render() {
        return (
            <div className="text-white flex flex-col min-h-screen gap-8">
                <div className="">
                    <h1 className="text-5xl uppercase">Coursework</h1>
                    <p className="text-lg">GPA: 3.95/4.0</p>
                    <p className="text-md">B.S. Computer Science, A.B.2 Global Health</p>
                </div>
                <div className="flex flex-col">
                    <Course title="CS316" desc="Topics include data modeling, database design theory, 
                        data definition and manipulation languages (SQL and NoSQL), database application 
                        programming interfaces, storage and indexing, query processing and optimization, 
                        parallel and distributed data processing and transaction processing." 
                        url="https://google.com" img="https://miro.medium.com/v2/resize:fit:1400/1*PsnGY7NGiSg7rF2TkVFEUA.png" 
                        imgalt="database diagram" />
                    <Course title="CS330" desc="sjdflkjsdlkfjs" url="https://google.com"
                    img="" imgalt="" />
                    <Course title="STA210" desc="sjdflkjsdlkfjs" url="https://google.com"
                    img="" imgalt="" />
                </div>
            </div>
        )
    }
}

export default Coursework