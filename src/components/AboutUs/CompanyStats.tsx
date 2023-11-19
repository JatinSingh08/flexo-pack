import Image from "next/image";
import React from "react";
import EmployeesLogo from "@/assets/employees.png";
import ServiceLogo from "@/assets/service.png";
import LegalLogo from "@/assets/legal.png";
import FactoryLogo from "@/assets/factory.png";
import LicenseLogo from "@/assets/license.png";
import BuisinessLogo from "@/assets/business.png";

const CompanyStats = () => {
  const stats = [
    {
      logo: EmployeesLogo,
      title: "Employees",
      numbers: "200+",
    },
    {
      logo: ServiceLogo,
      title: "Service Stations",
      numbers: "5+",
    },
    {
      logo: LegalLogo,
      title: "Legal Status of firm",
      numbers: "Pvt.Ltd",
    },
    {
      logo: FactoryLogo,
      title: "Year of Est.",
      numbers: "2004",
    },
    {
      logo: LicenseLogo,
      title: "License",
      numbers: "6",
    },
    {
      logo: BuisinessLogo,
      title: "Nature of Business",
      numbers: "Manf. Export",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center gap-10">
        {/* // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center place-items-center gap-10 my-10"> */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <Image
              alt="Employees"
              src={EmployeesLogo}
              width={1200}
              height={600}
              className="w-28 h-28 object-contain"
            />
            <p className="text-[#224c89] font-semibold text-xl whitespace-nowrap">
              Employees
            </p>
          </div>
          <p className="text-blue-600 font-semibold text-4xl">200+</p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <Image
              alt="Employees"
              src={ServiceLogo}
              width={1200}
              height={600}
              className="w-28 h-28 object-contain"
            />
            <p className="text-[#224c89] font-semibold text-xl whitespace-nowrap">
              Service Stations
            </p>
          </div>
          <p className="text-blue-600 font-semibold text-4xl">5+</p>
        </div>


        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <Image
              alt="Employees"
              src={LegalLogo}
              width={1200}
              height={600}
              className="w-28 h-28 object-contain"
            />
            <p className="text-[#224c89] font-semibold text-xl whitespace-nowrap">
            Legal Status of firm
            </p>
          </div>
          <p className="text-blue-600 font-semibold text-4xl">Pvt.Ltd</p>
        </div>

      </div>


      <div>
        
      </div>

    </div>
  );
};

export default CompanyStats;
