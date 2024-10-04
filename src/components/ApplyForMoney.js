import React from 'react'

export default function ApplyForMoney() {
    return (
        <div className='flex justify-center items-center h-auto mb-10'>
            <div className='bar w-[90%] lg:w-[80%] flex justify-center items-center flex-col h-auto p-5 gap-4 text-[#FFFFFF] rounded-xl'>
                <p className='text-xl md:text-2xl font-semibold'>Get Free Apply Now</p>
                <p className='text-2xl md:text-3xl lg:text-4xl font-bold'>How Much Money Do you need ?</p>
                <input className='p-2 md:p-4 w-[90%] lg:w-[50%]  rounded-xl text-black text-2xl' placeholder='Enter Your Amount' />
                <button className='bg-[#006738] rounded-full p-3 lg:relative  bottom-[72px] left-64 z-50 hover:bg-[#04200E] transition-all duration-300 cursor-pointer0
                px-4'>Apply Now</button>
            </div>
        </div>
    )
}
