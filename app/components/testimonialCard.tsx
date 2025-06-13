import React from 'react'

type TestimonialProps = {
    text: string,
    textHighlight: string,
    name: string,
    occupation: string
}

const TestimonialCard = ({text, textHighlight, name, occupation}: TestimonialProps) => {
  return (
    <div className="w-full bg-bblue rounded-2xl p-6 lg:p-8 flex gap-5 flex-col items-center">
        <p className='font-clash text-[20px] lg:text-2xl text-lblue text-center'>&quot;{text}<span className='text-white'> {textHighlight}</span>.&quot;</p>
        <p className='text-[14px] lg:text-[16px] text-center text-white'>— {name}, <span className='text-lblue'>{occupation}</span></p>
    </div>
  )
}

export default TestimonialCard