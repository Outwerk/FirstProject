import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from './HeroSection'


export default function LandingPage() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
        {/* <h1 className='bg-red-100 w-full h-screen'>LANDING PAGE</h1> */}
    </div>
  )
}
