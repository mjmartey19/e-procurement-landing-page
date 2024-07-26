import React from 'react'

const Waitlist = () => {
  return (
    <div className='flex justify-center items-center p-16 bg-gray-100 mb-20'>
        <div className='flex flex-col gap-5 justify-center items-center'>
            <h1 className='font-bold text-3xl'>Join Our Waitlist</h1>
            <p>Be among the pioneers to explore the future of E-Procurement Solutions.</p>
            <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSdlptJeTFeyp_2jdW9Um0Sj_Q_q5UDQuT_7cU9Wfx_nPTbPFQ/viewform'
                target='_blank'
                className='text-white px-8 py-3 rounded-full font-semibold bg-blue-600 hover:bg-blue-700 transition duration-300 mr-4'
            >
                Register Now for Early Access
            </a>
        </div>
    </div>
  )
}

export default Waitlist
