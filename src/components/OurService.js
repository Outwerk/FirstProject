import React from 'react'

export default function OurService() {

    let Cards =[
        {
            cardImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQYFMjrRvpJN-h0t1VX-p-0NE7dg6vdkzgw&s",
            heading:"Business Loan",
            text:"Expand your business with the our Business Loans, which provides flexible financing choices, personalized support, and competitive rates to help you expand, improve cash flow, and reach your entrepreneurial goals."
        },
        {
            cardImg:"https://advancedcash.co.nz/wp-content/uploads/2020/07/05-How-You-Can-Benefit-From-An-Instant-Cash-Loan.jpg",
            heading:"Commercial Loan",
            text:"We offers Commercial Loan that are aimed to the specific needs of businesses, providing funding for real estate acquisitions, equipment financing, working capital, and other critical business efforts, enabling you to achieve growth and success. "
        },
        {
            cardImg:"https://media.istockphoto.com/id/1145371340/photo/partner-has-made-a-fraud-in-the-contract-of-sale-and-being-handed-a-cash-and-pen-to-the.jpg?s=612x612&w=0&k=20&c=gEL2GiGxVAWIg6zd73afHWjVE37cNEBww49DE45jwiI=",
            heading:"SBA Loan",
            text:"We provide government-sponsored SBA Loans to small businesses, nurturing their development and expansion by providing critical financial freedom to drive growth, seize opportunities, and achieve long-term success"
        },
        {
            cardImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlL7ZsR3OYMCMiYPQ-Wa-4tb3PhxiVfctCOw&s",
            heading:"Construction Loan",
            text:"With our Construction Loan, you may get the financing you need, as well as various repayment choices and specialized support, to make your building ideas a reality, ensuring timely completion, high craftsmanship, and the realization of your company goal"
        },
    ]




  return (
    <div className='my-10 bg-slate-100 p-4 '>
        <div className='lg:w-[80%] w-full flex justify-center items-center flex-col lg:mx-auto gap-3 '>
            <h3 className='text-[#04200E] text-2xl font-bold self-start'>Our services</h3>
            <h1 className='text-[#04200E] text-3xl md:text-4xl font-bold self-start '>We're covering all the loan fields</h1>
            <p className='text-xl  lg:pe-16 mt-5'>We offer a variety of loan options to meet the diverse needs of small businesses. Our loans are designed to be fast and easy to obtain, with flexible repayment plans and competitive interest rates. Whether you need funds to cover operating expenses, purchase inventory, or invest in equipment, we have a loan solution that's right for you. </p>

            <div className='flex justify-center items-center gap-14 overflow-hidden md:flex-nowrap flex-wrap mt-5'>
                {Cards.map((elem,index)=>(
                    <div key={index} className=' md:w-72 w-80  rounded-lg bg-white'>
                    <img 
                    className='rounded-lg'
                    src={elem.cardImg}/>
                    <h2 className='text-xl text-[#006738] text-left p-2 ps-4 mt-1'>{elem.heading}</h2>
                    <p className='text-md leading-5 text-[#006738] text-left p-2 ps-4 pb-5'>{elem.text}</p>
                </div>

                ))}
                
            </div>

        </div>




    </div>
  )
}
