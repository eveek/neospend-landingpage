import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='pt-[100px] lg:pt-[150px] px-4'>
        <div className="max-w-[950px] md:w-10/12 mx-auto flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl lg:text-5xl font-clash text-center">Take Control Of Your Spending and Start Making <span className='text-transparent font-clash bg-clip-text font-bold bg-gradient-to-r from-bblue via-bblue to-dblue'>Smarter</span> Financial Decisions</h1>
            <p className="w-10/12 text-[14px] lg:text-[20px] text-center text-textsec">Track your expenses effortlessly, set smarter budgets, and get AI-powered insights — all in one place.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center text-[14px] lg:text-[16px]">
                <button className='h-[40px] lg:h-[45px] px-[24px] border rounded-xl border-bblue text-white bg-gradient-to-r from-bblue via-bblue to-dblue'>Get Started</button>
                <button className='h-[40px] lg:h-[45px] px-[24px] border rounded-xl border-bblue text-bblue cursor-pointer'>
                    <Image
                        src="/play-icon.png"
                        alt="Play Icon"
                        width={1000}
                        height={1000}
                        className="inline-block w-5 h-auto mr-2"
                    />
                Watch Demo</button>
            </div>
        </div>
        <div className="">
            <Image
                src="/hero-image1.png"
                alt="Hero Image"
                width={1500}
                height={1500}
                quality={100}
                className="w-full mx-auto mt-8 lg:mt-6"
            />
        </div>
    </div>
  )
}

export default Hero