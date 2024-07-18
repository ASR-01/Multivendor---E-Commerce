import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Card from '../../Components/Cards/Card'
import GlobeHead from '../../Components/GlobeHead/GlobeHead'
import BottomBanner from '../../Components/BottomBanner/BottomBanner'
import HomeFeat1 from '../../Components/HomeFeat1/HomeFeat1'
import HomeFeat2 from '../../Components/HomeFeat2/HomeFeat2'
import HomeFeat3 from '../../Components/HomeFeat3/HomeFeat3'
export default function Home() {
  return (
    <div>
      <Navbar />
      <GlobeHead />
      <Card />
      <HomeFeat1 />
      <HomeFeat2 />
      <HomeFeat3 />
      <BottomBanner />
      <Footer />
    </div>
  )
}
