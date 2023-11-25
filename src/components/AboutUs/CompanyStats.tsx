import Image from "next/image";
import React from "react";
import MissionValues from '@/assets/missionvalues.png';
const CompanyStats = () => {

  return (
    <div className="flex items-center justify-center py-4 px-4">
      <Image 
      alt="missionvalues"
      src={MissionValues}
      width={1200}
      height={800}
      className="w-full lg:w-[60%] h-full object-contain"
      draggable={false}
      />
    </div>
  );
};

export default CompanyStats;
