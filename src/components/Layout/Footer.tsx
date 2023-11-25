import React from 'react'

const Footer = () => {
  return (
    <footer className="min-w-full mt-2 bg-[#224c89]  backdrop-blur-[6px] flex px-6 sm:justify-center items-center">
      <div className="w-full lg:w-[832px] py-10 flex flex-col gap-6 sm:mx-auto">
        {/* Image */}
        <div className="flex flex-row items-center justify-start">
          {/* <Image
            src={theme === "light" ? FooterImage : FooterImageDark}
            alt="Footer Image"
            width={300}
            height={70}
            className="h-[66px] w-auto"
          /> */}
        </div>
        {/* Navlink */}
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-16">
          {/* 1st Column */}
          <div className="flex flex-1 flex-col items-start gap-4">
          <p className="text-[#F9C94E] text-xl font-semibold">
              Contact Us
            </p>
            <ul className="list-none flex flex-col gap-2">
            <li className="text-white font-semibold text-base">
                <a
                >
                  Head Office
                </a>
              </li>
              <li className="text-white font-semibold text-base">
                <a
                  href="tel:+91931204770"
                  target="_blank"
                  rel="noopener noreferrer"
                >
              Tel :- +91-931204770, +91-9350577429, +91-9350231555
                </a>
              </li>
              <li className="text-white font-semibold text-base">
              Plot No - 84,Jeevan Nagar Wazirpur, Huda Road Greater Faridabad -121002

              </li>
            </ul>
          </div>


         
          {/* 2nd Column */}
          <div className="flex flex-1 flex-col items-start gap-4">
          <p className="text-[#F9C94E] text-xl font-semibold">
              {"What's New"}
            </p>
            <ul className="list-none flex flex-col gap-2">
            <li className="text-white font-semibold text-base">
                <a
                >
                  Innovation
                </a>
              </li>
              <li className="text-white font-semibold text-base">
                <a
                >
                  Blogs
                </a>
              </li>
              <li className="text-white font-semibold text-base">
                <a
                >
                  News
                </a>
              </li>
              <li className="text-white font-semibold text-base">
                <a
                >
                  Blogs
                </a>
              </li>
              <li className="text-white font-semibold text-base">
                <a
                >
                  Exhibitions
                </a>
              </li>
              <li className="text-white font-semibold text-base">
                <a
                >
                  Brand Gallery
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd Column */}
       
          <div className="flex flex-1 flex-col items-start gap-4">
            <p className="text-[#F9C94E] text-xl font-semibold">
              Our Service Stations
            </p>
            <ul className="list-none flex flex-col gap-2">
              <li className="text-white font-semibold text-base">
                <a
                >
                  Ahemedabad
                </a>
              </li>
              <li className="text-white font-semibold text-base">
                <a
                >
                  Mumbai
                </a>
              </li>
              <li className="text-white font-semibold text-base">
                <a
                >
                  Hyderabad
                </a>
              </li>
              <li className="text-white font-semibold text-base">
                <a
                >
                  Patna
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Made with love tagline */}
        <p className="w-full text-sm font-medium text-center sm:flex flex-row justify-center items-center gap-1">
        <span className="text-white font-semibold text-base">
            Made with ❤️ in India
          </span>
          <span className="hidden sm:block text-white">|</span>
          <br className="block sm:hidden" />
          <span className="text-white font-semibold text-base">
            © Flexo Pack Machines pvt Ltd
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
