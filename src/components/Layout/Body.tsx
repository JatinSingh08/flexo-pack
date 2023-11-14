import React from 'react'
import Globe from '@/assets/globe.png';
import Image from 'next/image';

const Body = () => {
  return (
    <div>
      <Image
      alt='globe'
      src={Globe}
      className="w-full h-full object-contain"
      />
    </div>
  )
}

export default Body
