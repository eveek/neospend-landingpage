import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-black'>
      <Image
        src="/footer-image.png"
        alt="Footer Logo"
        width={1000}
        height={1000}
        quality={100}
        className="h-auto w-full mx-auto py-4"
      />
    </div>
  )
}

export default Footer