
import React, { useEffect, useState } from 'react';

export default function OurService() {
    const [index, setIndex] = useState(0);
    let cards = [
        {
            cardImg: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/02/full/1717344553-5869.jpg?im=FeatureCrop,size=(826,465)",
            heading: "Business Loan",
            text: "Expand your business with the our Business Loans, which provides flexible financing choices, personalized support, and competitive rates to help you expand, improve cash flow, and reach your entrepreneurial goals."
        },
        {
            cardImg: "https://www.dnb.nl/media/1yrlnod0/anp-foto-bij-artikel-cash-geld.jpg?width=1600&height=900&quality=100&rnd=133268444073300000",
            heading: "Commercial Loan",
            text: "We offers Commercial Loan that are aimed to the specific needs of businesses, providing funding for real estate acquisitions, equipment financing, working capital, and other critical business efforts, enabling you to achieve growth and success. "
        },
        {
            cardImg: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/recent-data-shows-551-rise-in-average-monthly-atm-cash-withdrawals-in-fy2024-015457949-16x9_0.jpg?VersionId=ppfbWzejfsvwarirES2GSrN1HKQsnHqR",
            heading: "SBA Loan",
            text: "We provide government-sponsored SBA Loans to small businesses, nurturing their development and expansion by providing critical financial freedom to drive growth, seize opportunities, and achieve long-term success"
        },
        {
            cardImg: "https://www.forbes.com/advisor/wp-content/uploads/2023/04/go_to_cash.jpg",
            heading: "Construction Loan",
            text: "With our Construction Loan, you may get the financing you need, as well as various repayment choices and specialized support, to make your building ideas a reality, ensuring timely completion, high craftsmanship, and the realization of your company goal"
        },
    ]

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className='my-10 bg-slate-100 p-4 pb-10 mb-20'>
            <div className='lg:w-[80%] w-full flex justify-center items-center flex-col lg:mx-auto gap-3 '>
                <h3 className='text-[#04200E] text-2xl font-bold self-start'>Our services</h3>
                <h1 className='text-[#04200E] text-3xl md:text-4xl font-bold self-start font-serif'>We're covering all the loan fields</h1>
                <p className='text-xl  lg:pe-16 mt-5 '>We offer a variety of loan options to meet the diverse needs of small businesses. Our loans are designed to be fast and easy to obtain, with flexible repayment plans and competitive interest rates. Whether you need funds to cover operating expenses, purchase inventory, or invest in equipment, we have a loan solution that's right for you. </p>

                {/* Cards */}
                <div className="relative max-w-[340px] sm:max-w-3xl self-center bg-white shadow-2xl my-5  sm:p-6">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500" style={{ transform: `translateX(${-index * 100}%)` }}>
                            {cards.map((card, idx) => (
                                <div key={idx} className="min-w-full rounded-lg p-3">
                                    <img
                                        className='rounded-lg '
                                        src={card.cardImg}
                                        />
                                    <h2 className='text-2xl md:text-3xl text-[#006738] text-center p-2 mt-1 font-bold font-serif'>{card.heading}</h2>
                                    <p className='text-md leading-5 text-[#006738] text-left p-2 ps-4 py-2'>{card.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={prevSlide} className="absolute left-2 top-[53%] transform -translate-y-1/2 bg-slate-200 text-[#006738] rounded-full p-1">
                        &#10094;
                    </button>
                    <button onClick={nextSlide} className="absolute right-2 top-[53%] transform -translate-y-1/2 bg-slate-200 text-[#006738] rounded-full p-1">
                        &#10095;
                    </button>
                </div>
            </div>

        </div>
    )
}
