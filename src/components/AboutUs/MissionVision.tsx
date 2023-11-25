import Image from "next/image";
import React from "react";
import MissionImage from "@/assets/mission.png";
import VisionImage from "@/assets/vision.png";

const MissionVision = () => {
  return (
    <div className="flex ">
      <div className="flex-1 bg-[#224c89] py-6 px-3 sm:px-6 flex flex-col items-start justify-center border border-r-white">
        <Image alt="mission" src={MissionImage} width={1200} height={800} className="w-20 h-20 sm:w-32 sm:h-32 object-contain" />
        <p className="text-white font-bold text-2xl sm:text-4xl mt-4">Mission</p>
        <p className="text-white mt-2">
          To meet {"customers’"} dynamic packaging needs by providing
          innovative, productive, cost-effective, optimized and eco-friendly
          packaging solutions, continually adding value to their business.
        </p>
      </div>

      <div className="flex-1 bg-[#224c89] py-6 px-3 sm:px-6 flex flex-col items-start justify-center border border-r-white">
        <Image alt="mission" src={VisionImage} width={1200} height={800} className="w-20 h-20 sm:w-32 sm:h-32 object-contain" />
        <p className="text-white font-bold text-2xl sm:text-4xl mt-4">Vision</p>
        <p className="text-white mt-2">
          To be the foremost Integrated Packaging Solution provider and partner
          of choice, locally and globally, Bringing progress for our customers&
          employees with continuous innovation & improvement
        </p>
      </div>
    </div>
  );
};

export default MissionVision;
