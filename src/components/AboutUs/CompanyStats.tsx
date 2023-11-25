import Image from "next/image";
import React from "react";
import EmployeesLogo from "@/assets/employees.png";
import ServiceLogo from "@/assets/service.png";
import LegalLogo from "@/assets/legal.png";
import FactoryLogo from "@/assets/factory.png";
import LicenseLogo from "@/assets/license.png";
import BuisinessLogo from "@/assets/business.png";
import MissionValues from '@/assets/missionvalues.png';
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
