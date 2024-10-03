import React from 'react'
import Form from '../components/Form'
import "../App.css"
import Cards from '../components/cards'
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom'
import { FaPhone } from "react-icons/fa";
import OurService from '../components/OurService';


export default function HeroSection() {
    const navigate = useNavigate()
    return (
        < >
            <div className='w-full flex justify-center md:justify-evenly items-center gap-3 flex-wrap md:flex-nowrap mt-[-20px] mb-10 md:mb-0'>


                {/* Div for Content */}
                <div className='flex justify-center md:justify-start items-center self-center  md:self-start flex-col gap-5 mt-[-50px] md:mt-2 p-3 md:p-0'>


                    {/* Bar On heading */}
                    <div className='self-start ms-2 min-h-4 mt-32 min-w-80 md:min-w-96 bar rounded-full'></div>

                    <div className='me-3 md:me-0 '>
                        <h1 className='text-4xl md:text-[80px] leading-none font-medium'>
                            Best <span className='text-[#006738] font-bold'>Business Loan <br /></span>for Low Credit Score
                        </h1>
                    </div>

                    <div className='md:self-start mt-5 md:mt-8 ms-5 md:ms-2 w-full max-w-[500px]'>
                        <p className='text-lg md:text-2xl break-words leading-relaxed'>
                            With our personalized small business loans,<br />
                            you may achieve financial freedom while also fueling
                            the growth of your small business.
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            navigate("/form")
                        }}
                        className='ms-2 mt-5 md:mt-10 self-start bg-[#006738] text-[#FFFFFF] p-4 px-6 md:p-5 md:px-8 rounded-md text-xl font-bold hover:bg-[#04200E] transition-all duration-300 cursor-pointer'>Let's Get Started</button>
                </div>
                {/* Div for Content  Ends Here*/}

                {/* Div for Form */}
                <div className='mt-16'>
                    <Form />
                </div>
                {/* Div for Form  Ends Here*/}


                {/* Seprator */}
                <div className='self-start ms-2 min-h-1 mt-20 min-w-80 md:min-w-96 bar rounded-full md:hidden block'></div>
            </div>

            {/* Cards */}
            <div>
                <Cards />
            </div>

            <div className='flex justify-center items-center h-auto mb-10'>
                <div className='bar w-[90%] lg:w-[80%] flex justify-center items-center flex-col h-auto p-5 gap-4 text-[#FFFFFF] rounded-xl'>
                    <p className='text-xl md:text-2xl font-semibold'>Get Free Apply Now</p>
                    <p className='text-2xl md:text-3xl lg:text-4xl font-bold'>How Much Money Do you need ?</p>
                    <input className='p-2 md:p-4 w-[90%] lg:w-[50%]  rounded-xl text-black text-2xl' placeholder='Enter Your Amount' />
                    <button className='bg-[#006738] rounded-full p-3 lg:relative  bottom-[72px] left-64 z-50 hover:bg-[#04200E] transition-all duration-300 cursor-pointer0
                px-4'>Apply Now</button>
                </div>
            </div>



            <div className=' mx-auto flex justify-center items-center  md:flex-row flex-col md:ms-32 gap-2'>
                <div className='flex-1 self-center'>
                    <img src='https://img.freepik.com/premium-photo/business-meeting-with-emplyees_1108314-462194.jpg'
                        className="lg:w-[90%] w-[90%] m-5  lg:ms-10 rounded-xl "
                        height="700px"
                    />
                </div>
 


                <div className='flex-1 flex flex-col gap-6  md:me-44 p-4 mb-20'>
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



            {/* Our Services Cards */}
            <OurService/>
        </>
    )
}
