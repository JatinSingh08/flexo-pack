import React from 'react'
import QR from "@/assets/qr.png";
import PDF from "@/assets/pdf.jpg";
import Link from "next/link";
import { AiOutlineArrowUp } from "react-icons/ai";
import Image from 'next/image';

const Brochure = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center items-start justify-center px-4 sm:px-10 mt-20 gap-10 sm:gap-2">
    <div className="flex flex-col items-center justify-center gap-6">
      <p className="text-2xl sm:text-3xl font-semibold text-blue-600">
        Why Flexo Pack...
      </p>
      <p className='text-lg font-normal'>
        Delivering a range of sturdy and functionally efficient Packaging
        Machines for the food & beverage industry… Our offering products are
        Food Packing Machine, Pouch Packaging Machine, Nam keen Packing
        Machine, Snacks Packing Machine, Liquid Packing Machine, etc.
      </p>
      <Link href="/" className="text-blue-500">
        Read More...
      </Link>
    </div>
    <div className="flex flex-col gap-2 items-center justify-center">
      <p className="text-2xl sm:text-3xl font-semibold text-blue-600">
        Support / Assistance
      </p>
      <div className="flex items-center justify-center gap-4">
        <div>
          <Image
            alt="qr-code"
            src={QR}
            className="w-32 h-32 object-contain"
          />
          <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out rounded-lg px-3 py-2 gap-2 text-white flex items-center justify-center">
            Scan Me <AiOutlineArrowUp className="w-6 h-6" />
          </button>
        </div>
        <Image alt="qr-code" src={PDF} className="w-24 h-24 object-contain" />
      </div>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <p className="text-2xl sm:text-3xl font-semibold text-blue-600">News / Events</p>
      <p className='font-bold text-lg'>Visit Us at: 
        <span className='font-normal'> Plot No - 84,Jeevan Nagar Wazirpur, Huda Road Greater Faridabad -121002</span>

      </p>
      <p></p>
    </div>
  </div>
  )
}

export default Brochure
