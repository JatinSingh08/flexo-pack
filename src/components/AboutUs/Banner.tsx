import Image from 'next/image';
import React from 'react';
import AboutImage from '@/assets/aboutBanner.png';

const AboutBanner = () => {
  return (
    <div className='w-full'>
      <Image
        src={AboutImage}
        alt='AboutBanner'
        width={1600}
        height={1200}
        quality={100} // Set the quality to 100 for maximum quality
        layout='responsive' // Use responsive layout for better resizing
        className='w-full object-contain'
      />
    </div>
  );
};

export default AboutBanner;
