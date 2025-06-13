import React from 'react'
import FeatureCard from './featureCard'

const Features = () => {
  return (
    <section id='features' className='px-6 mt-6 lg:px-[100px]'>
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className='p-1 px-2 text-xs rounded-xl border border-bblue bg-bblue/10 text-bblue text-center w-fit'>Features</p>
              <h2 className='font-clash text-2xl lg:text-[40px] text-center mb-3 lg:mb-8'>Why NeoSpend?</h2>
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="basis-2/5">
                  <FeatureCard
                  title={'All Your Accounts in One View'}
                  text={'Connect your bank accounts and cards to get a complete snapshot of your financial life — no switching apps or spreadsheets required.'}
                  image={'/total-expense.png'}
                  />
                </div>
                <div className="basis-3/5">
                  <FeatureCard
                  title={'AI-Powered Expense & Income Analytics'}
                  text={'Understand where your money goes with intelligent breakdowns, trends, and real-time insights tailored to your unique habits.'}
                  image={'/transaction-summary.png'}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="basis-3/5">
                  <FeatureCard
                    title={'Built for Security, Designed for Simplicity'}
                    text={'NeoSpend protects your data with bank-level encryption while keeping your experience clean, intuitive, and friction-free.'}
                    image={'/simply-secure.png'}
                  />
                </div>
                <div className="basis-2/5">
                  <FeatureCard
                    title={'Effortless Budgeting & Forecasting'}
                    text={'Set smart budgets, get spending alerts, and let NeoSpend forecast your financial future — automatically.'}
                    image={'/budget-list.png'}
                  />
                </div>
              </div>
            </div>
        </section>
  )
}

export default Features