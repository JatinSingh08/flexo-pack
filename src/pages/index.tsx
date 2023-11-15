import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '@/components/Layout/Banner'
import Header from '@/components/Layout/Header'
import Body from '@/components/Layout/Body'
import Purpose from '@/components/Purpose'
import Brochure from '@/components/Brochure'
import BrandPartners from '@/components/BrandPartners'
import Applications from '@/components/Applications'
import MostPopular from '@/components/MostPopular'
import Footer from '@/components/Layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
    <main>
      <Banner />
      <Header />
      <div className='min-h-[100vh]'>
        <Body />
        <Purpose />
        <BrandPartners />
        <Brochure />
        <Applications />
        <MostPopular />
      </div>
      <Footer />
    </main>
   </>
  )
}
