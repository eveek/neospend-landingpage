import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Features from './components/Features'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

function Home() {
  return (
    <div>
      <Header />
      <main className='flex flex-col gap-10'>
        <Hero />
        <Steps />
        <Features />
        <Testimonials />
        <CallToAction />
        <Footer />
      </main>
    </div>
  )
}

export default Home