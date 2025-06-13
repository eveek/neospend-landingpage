import React from 'react'
import Image from 'next/image'

type featureCardProps = {
    title : string,
    text: string,
    image?: string
}

const FeatureCard = ({title, text, image}: featureCardProps) => {
  return (
    <div className="p-6 bg-bgray rounded-2xl border border-boder h-fit lg:h-full flex flex-col gap-4 justify-between">
        <div className="">
          <h3 className='text-xl lg:text-2xl text-bblue font-clash'>{title}</h3>
          <p className='text-[14px] lg:text-[16px] text-textsec'>{text}</p>
        </div>
        <div className=" w-full h-[200px] items-center pt-6 pb-0 rounded-xl mt-2 bg-gradient-to-r from-dblue via-bblue  to-dblue overflow-hidden">
          <Image 
            src={image ?? "/placeholder.png"} 
            alt="feature image" 
            width={1000}
            height={1000}
            className='w-[400px] h-auto mx-auto object-top' />
        </div>
    </div>
  )
}

export default FeatureCard