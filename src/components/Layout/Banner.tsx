import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/logo.png';
import CE from '@/assets/certification-ce.png';
import DAC from '@/assets/dac.png';
import Facebook from '@/assets/facebook.png';
import Instagram from '@/assets/instagram.png';
import Linkedin from '@/assets/linkedin.png';

const Banner = () => {
  return (
    <div className="px-2 sm:px-10 md:px-24 py-2 flex items-center justify-between">
      <Image
        src={Logo}
        width={150}
        height={150}
        alt="logo"
        className="w-[--168px] h-[--168px] sm:w-[120px] sm:h-[120px] md:w-[--160px] md:h-[--160px] object-contain"
      />
      <div className="flex flex-col items-center justify-center">
        <p className="text-[12px] sm:text-[24px] md:text-[28px] lg:text-[48px] underline-offset-8 underline text-[#224C89] font-bold mx-auto">FLEXO PACK MACHINES LTD</p>
        <div className="text-[10px] sm:text-[16px] md:text-[--24px]  flex flex-col items-center justify-center text-[#224C89] font-semibold mt-2">
          <p>Inspired by Nature...!</p>
          <p>Driven by Cutting Edge Technologies</p>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-2'>
        <div className='flex items-center justify-center gap-4'>
          <Image
          alt='certification'
          src={CE}
          className='w-[--64px] h-[--64px] lg:w-[64px] lg:h-[64px] object-contain'
          />
          <Image 
            alt='DAC'
            src={DAC}
            className='w-[--64px] h-[--64px] lg:w-[64px] lg:h-[64px] object-contain'
            />
        </div>

        <div className='flex items-center justify-center gap-2'>
          <Image 
            alt='Facebook'
            src={Facebook}
            className='w-[--64px] h-[--64px] lg:w-[64px] lg:h-[64px] object-contain'
            />
            <Image 
            alt='Instagram'
            src={Instagram}
            className='w-[--64px] h-[--64px] lg:w-[64px] lg:h-[64px] object-contain'
            />  
            <Image 
            alt='Linkedin'
            src={Linkedin}
            className='w-[--64px] h-[--64px] lg:w-[64px] lg:h-[64px] object-contain'
            />
        </div>
      </div>
    </div>
  );
}

export default Banner
