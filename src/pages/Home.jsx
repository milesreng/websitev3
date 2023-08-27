import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className="flex flex-col gap-4 text-white h-screen justify-center">
                <h3 className="text-2xl w-11/12 md:w-3/4 lg:w-1/2 md:pl-40">Hi, I'm Miles Eng, a student at 
                Duke University seeking to <span className="underline">drive change</span>  at the intersection of <span className="text-beige">global 
                health</span> and <span className="text-bluegray">technology</span>.</h3>

            </div>
        )
    }
}

export default Home