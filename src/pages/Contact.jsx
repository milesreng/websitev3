import React, { useState } from 'react'

const Contact = () => {
  const [inputName, setInputName] = useState('')
  const [email, setEmail] = useState('')
  const [emailValidity, setEmailValidity] = useState(true)
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    alert('your message was sent!')
  }

  const handleName = (e) => {
    setInputName(e.target.value)
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleEmail = (e) => {
    if (validateEmail(e.target.value)) {
      setEmailValidity(true)
    } else {
      setEmailValidity(false)
    }

    setEmail(e.target.value)
  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className='w-5/6 mx-auto'>
      <h1 className='mx-auto text-3xl md:text-4xl uppercase text-gunmetal mt-4 md:mt-12'>Contact Me</h1>
      <div className='w-11/12 mx-auto mt-8 border-2 border-white text-gunmetal-50  bg-gunmetal bg-opacity-80'>
        <div className='w-5/6 mx-auto py-8'>
          <form className='w-full flex flex-col gap-8' onSubmit={handleSubmit}>
            <div className='flex flex-col lg:flex-row gap-4 lg:justify-between w-full'>
              <div className='w-full lg:flex lg:w-5/12 lg:items-start'>
                <div className='w-11/12 lg:w-full block md:flex md:flex-row items-center gap-2 mx-auto justify-between'>
                  <label htmlFor='name' className='text-white md:w-1/4 lg:w-1/6 hidden md:flex'>
                                            Name
                  </label>
                  <input type='text' id='name' placeholder='Your Name' onChange={handleName} value={inputName} className='text-gunmetal-900 appearance-none border-2 w-full md:w-2/3 lg:w-3/4 border-gunmetal rounded py-2 px-4 focus:ring-gunmetal-900 focus:border-gunmetal-900 bg-default-bg' required />
                </div>
              </div>
              <div className='w-full lg:flex lg:w-5/12 lg:flex-col'>
                <div className=''>
                  <div className='w-11/12 lg:w-full block md:flex md:flex-row justify-between items-center gap-2 mx-auto'>
                    <label htmlFor='email' className='text-white hidden md:w-1/4 lg:w-1/6 md:flex'>
                                                Email
                    </label>
                    <input type='text' id='email' placeholder='name@example.com' onChange={handleEmail} value={email} className='text-gunmetal-900 appearance-none border-2 border-gunmetal rounded w-full md:w-2/3 lg:w-3/4 py-2 px-4  focus:ring-gunmetal-900 focus:border-gunmetal-900 bg-default-bg' required />
                  </div>
                </div>
                {!emailValidity && (
                  <p className='text-xs pt-1 text-red-100'>Your email is not valid</p>
                )}
              </div>
            </div>
            <div className='flex-col flex-wrap w-11/12 lg:w-full mx-auto '>
              <div className=''>
                <label htmlFor='message' className='block text-left pb-2'>
                                        Message
                </label>
              </div>
              <div className='md:w-full'>
                <textarea id='message' cols='30' rows='10' placeholder='Your message here...' onChange={handleMessage} value={message} className='block text-gunmetal-900 appearance-none border-2 border-gunmetal rounded w-full py-2 px-4 h-32 focus:ring-gunmetal-900 focus:border-gunmetal-900 bg-default-bg' ></textarea>
              </div>
            </div>
            <button type='submit' className=' bg-gunmetal-800 rounded-md w-1/2 md:w-1/4 lg:w-1/6 text-md lg:text-xl mx-auto py-1 hover:bg-gunmetal-900 transition duration-200'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact