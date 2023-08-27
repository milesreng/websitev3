import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div className="w-2/3 mx-auto">
                <h1 className="text-5xl uppercase text-white mt-4">Contact Me</h1>
                <div className="mt-4 border-2 border-white text-white">
                    <div className="w-5/6 mx-auto py-8">
                        <form method="post"
                              action="https://public.herotofu.com/v1/acdc8260-4276-11ed-9b17-6fdf7f94f506" 
                              className="w-full">
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:flex md:items-center mb-6 md:w-1/2">
                                    <div className="md:w-1/3">
                                        <label htmlFor="name" className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
                                            Name
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input type="text" id="name" placeholder="" className="bg-navy text-white appearance-none border-2 border-white rounded w-full py-2 px-4" />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6 md:w-1/2">
                                    <div className="md:w-1/3">
                                        <label htmlFor="email" className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
                                            Email
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input type="text" id="email" placeholder="name@example.com" className="bg-navy text-white appearance-none border-2 border-white rounded w-full py-2 px-4" />
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="flex-col flex-wrap -mx-3 mb-6">
                                <div className="px-3">
                                    <label htmlFor="message" className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
                                        Message
                                    </label>
                                </div>
                                <div className="md:w-full">
                                    <input type="textarea" id="message" className="block bg-navy text-white appearance-none border-2 border-white rounded w-full py-2 px-4" />
                                </div>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="">
                        <form method="post" action="https://public.herotofu.com/v1/acdc8260-4276-11ed-9b17-6fdf7f94f506">
                            <div className="mb-3 input-group">
                                <span class="input-group-text form-label form-firstline" id="basic-addon1">Name</span>
                                <input className="col-sm-2 form-control form-firstline" type="text" name="name" required></input>
                                <span class="input-group-text form-label form-firstline" id="basic-addon1" >Email</span>
                                <input className="col-sm-4 form-control form-firstline" type="email" name="email" placeholder="firstlast@example.com" required></input>
                            </div>
                            <div className="mb-3 input-group">
                                <textarea className="col-sm-6 mt-4 contact-message form-control" name="message" placeholder="Your message..." required></textarea>
                            </div>
                            <button id="btn-submit-form" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact