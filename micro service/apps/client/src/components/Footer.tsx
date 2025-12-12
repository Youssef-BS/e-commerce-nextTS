import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Copyright } from 'lucide-react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg'>
      <div className='flex flex-col gap-4 items-center md:items-start'>
        <Link href="/" className='flex items-center'>
        <Image 
        src="/logo.png" 
        alt='logo' 
        width={36} 
        height={36} 
        className='w-6 h-6 md:w-9 md:h-9'/>
        <p className='hidden md:block text-md font-medium tracking-wider text-white'>Ysf Store</p>
        </Link>
              <div className='flex items-center gap-1'><Copyright className='h-4 w-4 text-gray-400'/><p className='text-sm text-gray-400'>2025 YsfShop</p></div>
      <p className='text-sm text-gray-400'>All rights reserved .</p>
      </div>
      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
        <p className='text-sm text-amber-50'>Links</p>
        <Link href="/" className='hover:text-amber-400'>Home</Link>
        <Link href="/" className='hover:text-amber-400'>About</Link>
        <Link href="/" className='hover:text-amber-400'>Contact</Link>
      </div>
      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
        <p className='text-sm text-amber-50'>Products</p>
        <Link href="/" className='hover:text-amber-400'>All products</Link>
        <Link href="/" className='hover:text-amber-400'>New Arrivals</Link>
        <Link href="/" className='hover:text-amber-400'>Best sellers</Link>
      </div>
      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
        <p className='text-sm text-amber-50'>Contact</p>
        <Link href="/" className='hover:text-amber-400'>About</Link>
        <Link href="/" className='hover:text-amber-400'>Blog</Link>
        <Link href="/" className='hover:text-amber-400'>Contact</Link>
      </div>
    </div>
  )
}

export default Footer
