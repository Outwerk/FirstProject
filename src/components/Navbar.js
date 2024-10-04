import React from 'react'
import { FaPhone} from "react-icons/fa";
import TopNav from './TopNav';



export default function Navbar() {
  return (
    <>
    
      <TopNav/>
      <div className='flex md:justify-center justify-between md:px-0 px-6 items-center gap-10 w-full h-20'>

        <div className='cursor-pointer'><h2 className='p-3 px- cursor-pointer'> LOGO</h2></div>
        <div className=''>
          <a href="#" ><h2 className='bg-[#006738] text-[#FFFFFF] md:p-4 md:px-8 px-6 py-3 rounded-md text-sm font-bold hover:bg-[#04200E] transition-all duration-300'>Get Started</h2></a>
        </div>

        <div className='md:flex hidden items-center gap-4'>
          <div className='text-green-400 text-3xl p-4 outline outline-gray-300 rounded-full hover:bg-[#006738] hover:text-white transition-all duration-300 cursor-pointer'>	<FaPhone /></div>
          <div className='md:flex hidden justify-center items-start flex-col '>
            <b>(254) 500-2988</b>
            <p>Call to Our Experts</p>
          </div>
        </div>
      </div>
    </>

  )
}
