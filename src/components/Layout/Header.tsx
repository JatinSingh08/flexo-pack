import Link from 'next/link'
import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'


const Header = () => {
  return (
    <div className="shadow-md px-2 sm:px-10 md:px-24  py-3 sm:py-5 flex items-center justify-between bg-[#224c89] ">
       <ul className="text-white flex items-center justify-center gap-3 sm:gap-8">
        <li><Link href='/' className="text-xs sm:text-2xl font-semibold">Home</Link></li>
        <li><Link href='/' className="text-xs sm:text-2xl font-semibold">About Us</Link></li>
        <li><Link href='/' className="text-xs sm:text-2xl font-semibold">Accessories</Link></li>
      </ul>
      <div className='flex items-center justify-center gap-4'>
         <button className="text-[#244C89] bg-white px-2 sm:px-6 sm:py-2  font-semibold text-base sm:text-lg">Inquiry</button>
        <button><AiOutlineMenu className="text-white w-4 h-4 sm:w-8 sm:h-8" /></button>

      </div>
    </div>
  )
}

export default Header
