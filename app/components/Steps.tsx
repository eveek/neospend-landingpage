import React from 'react'
import StepCard from './stepCard'

const Steps = () => {
    return (
        <section id='steps' className='px-6 lg:px-[100px] mt-[-50px]'>
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className='p-1 px-2 text-xs rounded-xl border border-bblue bg-bblue/10 text-bblue text-center w-fit'>Steps</p>
              <h2 className='font-clash text-2xl lg:text-[40px] text-center mb-3 lg:mb-8'>How It Works</h2>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row justify-center">
                <StepCard
                    num={"1"} 
                    title={"Link Your Bank Accounts"} 
                    text={"Securely connect multiple accounts in seconds — no more manual entry."}
                />
                <StepCard
                    num={"2"} 
                    title={"Set Your Spending Budgets"} 
                    text={"Choose monthly limits by category and track how you spend in real time."}
                />
                <StepCard
                    num={"3"} 
                    title={"Get AI-Powered Insights"} 
                    text={"Understand your habits, receive helpful nudges, and stay on top of your money"}
                />
            </div>
        </section>
    )
}

export default Steps