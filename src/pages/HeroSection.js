import "../App.css"
import HeroForm from '../components/HeroForm';


export default function HeroSection() {
    return (
        < >
            <div className='w-full flex justify-center md:justify-evenly items-center  flex-wrap md:flex-nowrap mt-[-20px] mb-10 md:mx-20 '>

                {/* Div for Content */}
                <div className='flex justify-center md:justify-start items-center self-center md:self-start flex-col gap-5 mt-[-50px] md:mt-0 p-3 md:p-0'>


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
                        className='ms-2 mt-5 md:mt-10 self-start bg-[#006738] text-[#FFFFFF] p-4 px-6 md:p-5 md:px-8 rounded-md text-xl font-bold hover:bg-[#04200E] transition-all duration-300 cursor-pointer'>Let's Get Started</button>
                </div>


                {/* Div for Form */}
                <div className='md:mt-16 mt-0 '>
                    <HeroForm />
                </div>


                {/* Seprator */}
                <div className='self-start ms-2 min-h-1 mt-16 min-w-80 md:min-w-96 bar rounded-full md:hidden block'></div>
            </div>
            
        </>
    )
}
