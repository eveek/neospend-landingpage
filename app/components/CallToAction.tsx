import React from 'react'

const CallToAction = () => {
  return (
    <div className='w-full px-8 lg:px-[100px]'>
      <div className="w-full p-6 py-8 lg:py-32 rounded-2xl bg-gradient-to-b from-bblue flex items-center flex-col gap-4 to-dblue">
        <h1 className='font-clash text-2xl lg:text-[40px] text-lblue text-center leading-7'>Stop Tracking. Start Understanding</h1>
        <p className='text-[16px] lg:text-2xl text-white text-center'>Take control, gain clarity, and make smarter money decisions effortlessly.</p>
        <button className='h-[40px] w-fit lg:h-[45px] hover:bg-black cursor-pointer px-[24px] border rounded-xl border-bblue text-white bg-gradient-to-r from-bblue via-bblue to-dblue'>Get Started</button>
      </div>
    </div>
  )
}

export default CallToAction