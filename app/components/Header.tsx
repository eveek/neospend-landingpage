'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex fixed w-full items-center justify-between py-[16px] px-[24px] lg:px-[100px] font-medium backdrop-blur-sm bg-white/30'>
      <div className="">
        <Image
          src="/logo-head.png"
          alt="Logo"
          width={1000}
          height={1000}
          quality={100}
          className="h-10 w-auto lg:hidden"
        />
        <Image
          src="/logo-full.png"
          alt="Logo"
          width={1000}
          height={1000}
          quality={100}
          className="h-10 w-auto hidden lg:inline-block"
        />
      </div>
      <div className="hidden lg:flex">
        <nav className='text-bgray text-[16px]'>
          <ul className='flex gap-[24px]'>
            <li className="inline-block mr-6">
              <a href="#steps" className="text-textsec hover:text-bblue">Steps</a>
            </li>
            <li className="inline-block mr-6">
              <a href="#features" className="text-textsec hover:text-bblue">Features</a>
            </li>
            <li className="inline-block mr-6">
              <a href="#testimonials" className="text-textsec hover:text-bblue">Testimonials</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden gap-4 lg:flex">
        <button className='h-[45px] px-[24px] border rounded-xl border-bblue text-bblue'>Log in</button>
        <button className='h-[45px] px-[24px] border rounded-xl border-bblue text-white bg-gradient-to-r from-bblue via-bblue to-dblue'>Sign up</button>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <Image
            src={menuOpen ? "/close.png" : "/menu.png"}
            alt="Menu Icon"
            width={500}
            height={500}
            className="inline-block w-6 h-auto ml-4 cursor-pointer"
          />
        </button>
      </div>
      {/* Mobile nav */}
      {menuOpen && typeof window !== "undefined" && window.innerWidth < 1024 && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white p-4 shadow-lg">
          <nav>
            <ul className='flex flex-col gap-2 mt-4'>
              <li className="inline-block">
                <a href="#steps" onClick={toggleMenu} className="text-textsec block text-center p-2 rounded-xl hover:text-bblue hover:bg-bblue/5">Steps</a>
              </li>
              <li className="inline-block">
                <a href="#features" onClick={toggleMenu} className="text-textsec block text-center p-2 rounded-xl hover:text-bblue hover:bg-bblue/5">Features</a>
              </li>
              <li className="inline-block">
                <a href="#testimonials" onClick={toggleMenu} className="text-textsec block text-center p-2 rounded-xl hover:text-bblue hover:bg-bblue/5">Testimonials</a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-2 mt-4">
            <button className='h-[45px] px-[24px] border rounded-xl border-bblue text-bblue'>Log in</button>
            <button className='h-[45px] px-[24px] border rounded-xl border-bblue text-white bg-gradient-to-r from-bblue via-bblue to-dblue'>Sign up</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header