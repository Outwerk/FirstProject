import React from 'react'
import { GiNotebook } from "react-icons/gi";
import { RiExchangeDollarFill } from "react-icons/ri"
import { IoShieldCheckmark } from "react-icons/io5";


let cards = [{
    text: "Save Your Money",
    icon: GiNotebook
    },
    {
        text: "Get Free Apply",
        icon: RiExchangeDollarFill
    },
    {
        text: "Fast And Reliable",
        icon: IoShieldCheckmark
    },


]

function Cards() {
    return (
        <div className='w-full h-28  mb-16 mt-16 text-whtie flex flex-wrap justify-center items-center gap-1 md:gap-10'>
            {
                cards.map((elem, index) => (
                    <div className='bg-white w-full md:w-auto m-4 flex gap-5 items-center p-8 px-10 shadow-lg md:shadow-2xl hover:bg-[#10682f] transition-all duration-300 cursor-pointer hover:text-white text-[#006738] rounded-xl'>
                        <div className='text-4xl text-[#006738] bg-slate-200 p-4 rounded-full
                        hover:bg-[#159e45] transition-all duration-300 '>
                            <elem.icon /></div>
                        <h2 className=' text-2xl font-bold '>{elem.text}</h2>
                    </div>
                ))
            }

        </div>
    )
}

export default Cards
