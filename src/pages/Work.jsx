import React, { Component } from 'react'
import Experience from '../components/Experience'

class Work extends Component {
    render() {
        return (
            <div>
                <div className="text-white flex flex-col min-h-screen gap-8">
                    <Experience />
                </div>
                
            </div>
        )
    }
}

export default Work