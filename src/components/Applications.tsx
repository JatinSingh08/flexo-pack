import React, { useEffect, useState } from 'react';
import app1 from '@/assets/app1.webp';
import app2 from '@/assets/app2.webp';
import app3 from '@/assets/app3.png';
// import Company4 from '@/assets/app4.';
import app5 from '@/assets/app5.png';
import app6 from '@/assets/app6.jpg';
import app7 from '@/assets/app7.jpeg';
import app8 from '@/assets/app8.png';
import app9 from '@/assets/app9.png';
import app10 from '@/assets/app10.png';
import app11 from '@/assets/app11.png';
import app12 from '@/assets/app12.png';
import app13 from '@/assets/app13.png';
import Image from 'next/image';

const Applications = () => {
  const brands = [
    app1,
    app2,
    // app4,
    app5,
    app6,
    app7,
    app8,
    app9,
    app10,
    app3,
    app11,
    app12,
    app13,
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
      <p className="text-2xl sm:text-4xl font-bold bg-[#224c89] py-4 sm:py-6 w-full text-white text-center">Applications</p>
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
                  <Image src={image} alt="logo" className="image" />
                </div>
              ))}
            </section>
            <section className='slider'>
              {brands.map((image, index) => (
                <div key={index} >
                  <Image src={image} alt="logo" className="image" />
                </div>
              ))}
            </section>
            <section className='slider'>
              {brands.map((image, index) => (
                <div key={index} >
                  <Image src={image} alt="logo" className="image"  />
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

export default Applications;
