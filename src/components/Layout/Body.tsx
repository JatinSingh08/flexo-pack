import React from 'react';
import Image from 'next/image';
import Carousel1 from '@/assets/carousel1.png';
import Carousel2 from '@/assets/carousel2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';

const Body = () => {
  const images = [Carousel1, Carousel2];

  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`carousel-image-${index}`}
              width={1250}
              height={600}
              layout="responsive"
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-slate-900 cursor-pointer font-bold z-[99]">
          <CiCircleChevLeft className="w-8 h-8" />
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-slate-900 cursor-pointer font-bold z-[99]">
          <CiCircleChevRight className="w-8 h-8" />
        </div>
      </Swiper>
    </div>
  );
};

export default Body;
