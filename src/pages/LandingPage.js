import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from './HeroSection'
import OurMission from '../components/OurMission'
import OurService from '../components/OurService'


export default function LandingPage() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <OurMission/>
      <OurService/>

    </div>
  )
}
