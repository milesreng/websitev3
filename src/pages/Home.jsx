import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className="flex flex-col gap-4 text-white min-h-screen justify-center">
                <h3 className="text-2xl w-1/2 md:pl-40">Hi, I'm Miles Eng, a student at 
                Duke University with a passion for all things at the intersection of <span className="text-beige">global 
                health</span> and <span className="text-bluegray">technology</span>.</h3>

            </div>
        )
    }
}

export default Home