import React from 'react'

type StepCardProps = {
  num: string;
  title: string;
  text: string;
};

const StepCard = ({ num, title, text }: StepCardProps) => {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-b from-bblue  to-dblue flex flex-col align-bottom">
        <h3 className='text-[100px] lg:text-[200px] font-clash-med font-extrabold bg-gradient-to-b from-white via-bblue/70 to-transparent leading-20 lg:leading-40 text-transparent bg-clip-text mb-[-35px] lg:mb-[-65px]'>{num}</h3>
        <h3 className='text-xl lg:text-[30px] lg:leading-8 mb-2 font-clash text-lblue'>{title}</h3>
        <p className='text-sm lg:text-[16px] text-white'>{text}</p>
    </div>
  )
}

export default StepCard