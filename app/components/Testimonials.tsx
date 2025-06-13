import React from 'react'
import TestimonialCard from './testimonialCard'

const Testimonials = () => {
  return (
    <section id='testimonials' className='px-6 lg:px-[100px] py-8 lg:py-20 bg-dblue'>
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className='p-1 px-2 text-xs rounded-xl border border-white bg-white/10 text-white text-center w-fit'>Testimonials</p>
        <h2 className='font-clash text-white text-2xl lg:text-[40px] text-center mb-3 lg:mb-8'>Real People. Real Results.</h2>
      </div>
      <div className="w-full flex gap-4 flex-col lg:flex-row">
        <TestimonialCard 
          text={'Neospend actually shows me where my money is going and gives me real suggestions I can act on. It’s like having a'}
          textHighlight={'financial advisor in my pocket'}
          name={'David M.'}
          occupation={'Small Business Owner'}
        />
        <TestimonialCard 
          text={'Before Neospend, I had no idea what was eating my budget. Now I get smart alerts and insights that help me'}
          textHighlight={'stay on track without stress'}
          name={'Lola A.'}
          occupation={'Freelance Designer'}
        />
        <TestimonialCard 
          text={'Linking my accounts took seconds, and the dashboard tells me everything I need at a glance.'}
          textHighlight={'It’s secure, sleek, and totally worth it'}
          name={'Tobi E.'}
          occupation={'Remote Software Engineer'}
        />
      </div>

    </section>
  )
}

export default Testimonials