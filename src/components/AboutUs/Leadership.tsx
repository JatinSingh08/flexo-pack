import Image from "next/image";
import React from "react";
import leadership from "@/assets/leadership.png";

const Leadership = () => {
  return (
    <div className="px-2 lg:px-20 py-10">
      <Image
        alt="leadership"
        src={leadership}
        width={1200}
        height={800}
        className="w-full h-full object-contain"
        draggable={false}
      />
      <div className=" mt-6">
        <p className="text-blue-800 border border-l-red-700 border-l-8 border-t-0 border-r-0 border-b-0 px-4 text-sm sm:text-2xl lg:ml-3">
          Constantly focused on innovation & value addition, Flexo Pack has the
          promise of 3 {"Q's"} to his customers - Quality, Quantity & Quickness -
          and leading by example he has imbibed this in the culture of the
          organization. Flexo Pack embodies trust, respect, customer value,
          innovation, global perspective, speed, and socio-environmental
          responsiveness.
        </p>
      </div>
    </div>
  );
};

export default Leadership;
