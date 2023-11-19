import AboutBanner from '@/components/AboutUs/Banner'
import OurCompany from '@/components/AboutUs/OurCompany'
import Banner from '@/components/Layout/Banner'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import React from 'react'

const About = () => {
  return (
    <>
    <main>
      <Banner />
      <Header />
      <div className='min-h-[100vh]'>
        <AboutBanner />
        <OurCompany />
      </div>
      <Footer />
    </main>
   </>
  )
}

export default About
