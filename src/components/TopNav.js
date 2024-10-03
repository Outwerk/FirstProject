import React from 'react'
import { FaFacebook,FaQuestionCircle  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { RiDrinks2Fill } from "react-icons/ri";


export default function TopNav() {
  return (
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
  )
}
