import React, { useEffect, useState } from 'react';
import Company1 from '@/assets/company-1.png';
import Company2 from '@/assets/company-2.jpg';
import Company3 from '@/assets/company-3.jpg';
import Company4 from '@/assets/company-4.png';
import Company5 from '@/assets/company-5.png';
import Company6 from '@/assets/company-6.png';
import Company7 from '@/assets/company-7.png';
import Company8 from '@/assets/company-8.png';
import Company9 from '@/assets/company-9.png';
import Company10 from '@/assets/company-10.png';
import Company11 from '@/assets/company-11.png';
import Company12 from '@/assets/company-12.png';
import Company13 from '@/assets/company-13.png';
import Image from 'next/image';

const BrandPartners = () => {
  const brands = [
    Company1,
    Company2,
    Company3,
    Company4,
    Company5,
    Company6,
    Company7,
    Company8,
    Company9,
    Company10,
    Company11,
    Company12,
    Company13,
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const speed = 5000;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % brands.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [brands.length]);

  return (
    <div className="flex-col flex items-center justify-center mt-10 sm:mt-20">
      <p className="text-2xl sm:text-4xl font-bold bg-[#224c89] py-4 sm:py-6 w-full text-white text-center">BRAND GALLERY</p>
      {/* <div className="relative w-full overflow-hidden">
        <div
          className="flex items-center justify-center gap-10 relative w-full overflow-hidden h-20"
          style={{
            animation: `swipe ${brands.length * 3}s linear infinite`,
          }}
        > */}
          {/* wrapper */}
          <div className='relative w-full h-[10rem] mt-10 overflow-hidden flex items-center justify-center '>
            <div className='absolute flex'>
            <section className='slider'>
              {brands.map((image, index) => (
                <div key={index} >
                  <Image src={image} 
                  width={800}
                  height={600}
                  alt="logo" className="image" />
                </div>
              ))}
            </section>
            <section className='slider'>
              {brands.map((image, index) => (
                <div key={index} >
                  <Image src={image}
                   width={800}
                   height={600}
                  alt="logo" className="image" />
                </div>
              ))}
            </section>
            <section className='slider'>
              {brands.map((image, index) => (
                <div key={index} >
                  <Image src={image}
                   width={800}
                   height={600}
                  alt="logo" className="image"  />
                </div>
              ))}
            </section>

            </div>
          </div>
        {/* </div>
      </div> */}
    </div>
  );
};

export default BrandPartners;
