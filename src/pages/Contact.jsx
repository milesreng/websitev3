import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div className="w-5/6 mx-auto">
                <h1 className="text-3xl md:text-5xl uppercase text-white mt-4 md:mt-8">Contact Me</h1>
                <div className="w-11/12 mt-4 border-2 border-white text-white  bg-beige bg-opacity-20 mr-12">
                    <div className="w-5/6 mx-auto py-8">
                        <form method="post"
                              action="https://public.herotofu.com/v1/acdc8260-4276-11ed-9b17-6fdf7f94f506" 
                              className="w-full flex flex-col gap-8">
                            <div className="flex flex-col lg:flex-row gap-4 lg:justify-between w-full">
                                <div className="w-full lg:flex lg:w-5/12">
                                    <div className="w-11/12 lg:w-full block md:flex md:flex-row items-center gap-2 mx-auto justify-between">
                                        <label htmlFor="name" className="text-white md:w-1/4 lg:w-1/6 hidden md:flex">
                                            Name
                                        </label>
                                        <input type="text" id="name" placeholder="Your Name" className="text-white appearance-none border-2 w-full md:w-2/3 lg:w-3/4 border-white rounded py-2 px-4 focus:ring-navy focus:border-navy" required />
                                    </div>
                                </div>
                                <div className="w-full lg:flex lg:w-5/12">
                                    <div className="w-11/12 lg:w-full block md:flex md:flex-row justify-between items-center gap-2 mx-auto">
                                        <label htmlFor="email" className="text-white hidden md:w-1/4 lg:w-1/6 md:flex">
                                            Email
                                        </label>
                                        <input type="text" id="email" placeholder="name@example.com" className="text-white appearance-none border-2 border-white rounded w-full md:w-2/3 lg:w-3/4 py-2 px-4 focus:ring-navy focus:border-navy" required />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col flex-wrap w-11/12 lg:w-full mx-auto ">
                                <div className="">
                                    <label htmlFor="message" className="block text-white pb-2">
                                        Message
                                    </label>
                                </div>
                                <div className="md:w-full">
                                    <textarea name="" id="message" cols="30" rows="10" placeholder="Your message here..." className="block text-white appearance-none border-2 border-white rounded w-full py-2 px-4 h-32 focus:ring-navy focus:border-navy" ></textarea>
                                </div>
                            </div>
                            <button type="submit" className="border-2 border-beige w-1/2 md:w-1/4 lg:w-1/6 text-md lg:text-xl mx-auto py-1 hover:bg-beige transition duration-200">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact