import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom'


export default function OurMission() {
  return (
    <div className=' mx-auto flex justify-center items-center  md:flex-row flex-col md:ms-32 gap-2'>
                <div className='flex-1 self-center sm:self-start md:self-center ms-0 sm:ms-8 md:ms-0'>
                    <img src='https://img.freepik.com/premium-photo/business-meeting-with-emplyees_1108314-462194.jpg'
                        className="lg:w-[90%] w-[90%] m-5  lg:ms-0 rounded-xl "
                        height="700px"
                    />
                </div>
 
                <div className='flex-1 flex flex-col gap-6  md:me-44 p-4 mb-20 ms-0 sm:ms-8 md:ms-0'>
                    <p  className='text-[#04200E] text-xl font-bold'>About Company</p>
                    <p className='text-[#04200E] text-4xl font-bold'>Our Mission</p>
                    <div className='text-green-800 text-3xl  pe-16'> "Here at BizCashandCapital, we empower businesses and ensure financial prosperity through tailored Commercial loan services." </div>


                    <div className="flex items-center gap-3"><span className='text-green-600 text-xl'><FaCheckCircle /></span> Best loan programs with low interest rate</div>
                    <div className="flex items-center gap-3"><span className='text-green-600 text-xl'><FaCheckCircle /></span>  Our client's security is our first priority</div>
                    <div className="flex items-center gap-3"><span className='text-green-600 text-xl'><FaCheckCircle /></span>  Easy application procedure with less paperwork</div>


                    <p className='text-[#04200E] text-xl font-bold'>We offer ideal loan solution for business expansion</p>
                    <div className='text-green-800 text-xl  pe-16'>
                        When it comes to unlocking your business's potential, having a reliable financial partner like BizCashandCapital can make all the difference. We provide customized loan solutions that help businesses achieve their goals. Our team of loan specialists has years of experience in the industry and is committed to helping small businesses succeed.  </div>



                    <div className='flex justify-start md:items-center items-start md:gap-10 gap-4 md:flex-row flex-col'>
                        <div><Link to="/form" ><h2 className='bg-[#006738] text-[#FFFFFF] p-5 px-8 rounded-md text-sm font-bold hover:bg-[#04200E] transition-all duration-300'>Get Started</h2></Link></div>

                        <div className='flex justify-start items-center gap-4'>
                            <div className='text-green-400 text-3xl p-3 outline outline-gray-300 rounded-full hover:bg-[#006738] hover:text-white transition-all duration-300 cursor-pointer'>	<FaPhone /></div>
                            <div className='flex justify-center items-start flex-col '>
                                <b>(254) 500-2988</b>
                                <p>Call to Our Experts</p>
                            </div>
                        </div>
                    </div>

                </div>




            </div>
  )
}
