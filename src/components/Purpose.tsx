import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import Presence from '@/assets/presence.png';

const Purpose = () => {
  return (
    <div className='px-4 sm:px-10 mt-14 flex flex-col sm:flex-row items-center justify-center gap-10'>
      <div className='flex flex-col  items-start justify-center gap-4 '>
      <div className='flex flex-col items-start justify-center'>
          <p className="text-[#224c89] text-xl sm:text-2xl font-semibold">
            <span className="font-bold text-3xl">19</span> Years To Infinity...
          </p>
          <p className="text-[#4269a2] font-bold text-4xl sm:text-6xl mt-2">Our Purpose</p>
          <p className="mx-0 sm:mx-1 mt-4 text-base sm:text-lg">
            At Flexo pack, we constantly strive to be a globally preferred health care
            partner focussed on Innovative, Quality products and services
            resulting in enhanced value for our stakeholders. Driven by this
            purpose we have extended our presence across all the continents
            offering more than 300 products across various therapeutic
            categories in varied dosage forms. To make healthcare affordable and
            accessible, we have penetrated deep in markets in Africa, South East
            Asia and Latin America.
          </p>
        </div>
        <button className="bg-blue-600 px-4 py-2 rounded-lg text-white flex items-center justify-center gap-2">
          Read More <AiOutlineArrowRight />
        </button>
      </div>

      <div className=' rounded-2xl w-full h-full'>
        <Image 
        alt='logo'
        src={Presence}
        width={800}
        height={600}
        className='w-full h-full object-contain'
        />
      </div>
    </div>
  )
}

export default Purpose
