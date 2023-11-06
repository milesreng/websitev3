/* eslint-disable react/prop-types */
import React from 'react'

export default function Modal(props) {
  const [showModal, setShowModal] = React.useState(false)
  
  return (
    <>
      <button
        className='bg-bluegray text-default-bg mt-1 hover:bg-bluegray-500  text-sm rounded py-1 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 w-5/6 mx-auto'
        type='button'
        onClick={() => setShowModal(true)}
      >{props.buttonlabel}
      </button>
      {showModal ? (
        <>
          <div
            className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
          >
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gunmetal outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-navy rounded-t'>
                  <h3 className='text-3xl font-semibold text-navy uppercase'>
                    {props.title}
                  </h3>

                </div>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <p className='my-4 text-navy text-lg leading-relaxed tracking-wide'>
                    {props.desc}
                  </p>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-gunmetal-500 rounded-b'>
                  <button
                    className='text-gunmetal-900 bg-gunmetal-50 opacity-50 hover:bg-gunmetal-100 shadow hover:shadow-lg hover:font-bold uppercase rounded px-6 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}