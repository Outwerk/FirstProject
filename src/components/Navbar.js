import React from 'react'
import { FaPhone,FaFacebook,FaQuestionCircle  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { RiDrinks2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
      <div className='w-full h-10 md:flex hidden justify-between px-52 items-center bg-black text-white'>

        <div className='flex justify-center items-center gap-5'>
          <div className='text-2xl text-[#36a05b] '><MdEmail/></div>
          <p className='text-slate-200 hover:text-[#006738]'> info@bizcashandcapital.com</p>
        </div>



        <div>
          <ul className='flex justify-center items-center gap-4 list-none text-md'>
            <li className='text-slate-200 hover:text-[#006738]'>Terms And condition</li>
            <li className='text-slate-200 hover:text-[#006738]'>privacy</li>
            <li className='text-slate-200 hover:text-[#006738]'>About</li>
            <li className='text-slate-200 hover:text-[#006738]'><FaTwitter/></li>
            <li className='text-slate-200 hover:text-[#006738]'><FaFacebook/></li>
            <li className='text-slate-200 hover:text-[#006738]'><FaQuestionCircle/></li>
            <li className='text-slate-200 hover:text-[#006738]'><RiDrinks2Fill/></li>
          
          </ul>

        </div>



      </div>

      <div className='flex md:justify-center justify-between md:px-0 px-10 items-center gap-10 w-full h-20'>
        <div className='cursor-pointer'><Link to="/form" ><h2 className='p-3 px- cursor-pointer'> LOGO</h2></Link></div>
        <div className='md:flex hidden justify-center items-center gap-1 bg-slate-100 rounded-lg text-xl'>
          <Link to="/" ><h2 className='p-3 px- cursor-pointer'>Loan Program</h2></Link>
          <h2 className='p-4 px-3 cursor-pointer'>Industries</h2>
          <h2 className='p-4 px-3 cursor-pointer'>Contact Us</h2>
          <h2 className='p-4 px-3 cursor-pointer'>Blogs</h2>
          <Link to="/form" ><h2 className='bg-[#006738] text-[#FFFFFF] p-4 px-8 rounded-md text-sm font-bold hover:bg-[#04200E] transition-all duration-300'>Get Started</h2></Link>
        </div>
        <div className='md:flex hidden items-center gap-4'>
          <div className='text-green-400 text-3xl p-4 outline outline-gray-300 rounded-full hover:bg-[#006738] hover:text-white transition-all duration-300 cursor-pointer'>	<FaPhone /></div>
          <div className='md:flex hidden justify-center items-start flex-col '>
            <b>(254) 500-2988</b>
            <p>Call to Our Experts</p>
          </div>
        </div>

        <div id="menu" className='md:hidden block text-2xl text-[#006738] '>
          <Link id="metaMenu" to="/">&#9776;</Link>
        </div>
      </div>
    </>

  )
}
