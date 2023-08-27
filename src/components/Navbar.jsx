import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Linkedin } from '../assets/linkedin.svg'
import { ReactComponent as Github } from '../assets/github.svg'
import { Resume } from '../assets/Resume_Miles_Eng.pdf'

class Navbar extends Component {
    render() {
        return (
            <div className="w-full flex flex-row justify-between">
                <div className="flex flex-col fixed top-0 left-0 h-screen m-0 py-8 px-10 shadow justify-between border-r-2 border-beige">
                    <div className="flex flex-col gap-6 text-white uppercase text-center">
                        <Link to="/">
                            <p className="hover:text-beige">Home</p>
                        </Link>
                        <Link to="/experience">
                            <p className="hover:text-beige">Experience</p>
                        </Link>
                        <Link to="/coursework">
                            <p className="hover:text-beige">Coursework</p>
                        </Link>
                        <Link to="/contact">
                            <p className="hover:text-beige">Contact</p>
                        </Link>
                    </div>
                    <div className="flex-col">
                        <div className="border-solid border-white border-2 my-8 px-auto pb-1 pt-2 bg-beige
                                        hover:bg-white cursor-pointer text-navy uppercase text-center">
                            <object data="../assets/Resume_Miles_Eng.pdf" type="application/pdf">
                                <a href={ Resume } target="_blank">
                                    <p className="">Resume</p>
                                </a>
                            </object>
                            
                        </div>
                        <div className="flex fill-white  justify-around">
                        
                            <a href="https://www.linkedin.com/in/milesreng/" target="_blank">
                                <Linkedin className="fill-white hover:fill-beige transition-colors w-6" /> 
                            </a>
                            <a href="https://github.com/milesreng" target="_blank">
                                <Github className="fill-white hover:fill-beige transition-colors w-6" />
                            </a>
                        </div>
                    </div>
                    
                </div>
                <div className="pl-64 w-full pt-12">
                    <Outlet />
                </div>
            </div>

            // <div className="nav w-5/6 mx-auto bg-navy text-white font-jos-sans uppercase flex flex-row justify-between p-8">
            //     <div className="basis-1/6 flex flex-row gap-8">
            //         <a href="">
            //             <Linkedin className="fill-white hover:fill-beige transition-colors w-6" /> 
            //         </a>
            //         <a href="">
            //             <Github className="fill-white hover:fill-beige transition-colors w-6" />
            //         </a>
            //     </div>
            //     <div className="basis-1/2 flex flex-col md:flex-row justify-around text-m gap-4">
            //         <a className="hover:text-beige font-jos-slab" href="#about">About</a>
            //         <a className="hover:text-beige" href="">Skills</a>
            //         <a className="hover:text-beige" href="">Experience</a>
            //         <a className="hover:text-beige" href="">Coursework</a>
            //         <a className="hover:text-beige" href="">Contact</a>
            //     </div>
            // </div>
        )
    }
}

export default Navbar