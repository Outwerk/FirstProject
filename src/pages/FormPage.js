import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CryptoJS from 'crypto-js'

export default function FormPage() {


    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [buisnessName, setBuisnessName] = useState("")
    const [buisnessPhone, setBuisnessPhone] = useState("")
    const [amountRequested, setAmountRequested] = useState("")
    const [contactNo, setContactNo] = useState("")

    // Option fields
    const [ownerShip, setOwnerShip] = useState('');
    const [buisness, setBuisness] = useState('');

    // Image And its Error if Need
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [fileKey, setFileKey] = useState(0);


    // Handler for ownerShip
    const handleChange = (event) => {
        setOwnerShip(event.target.value);
    };

    // Handler for buisness
    const handlebuisness = (event) => {
        setBuisness(event.target.value);
    };

    // handle Input of image
    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];

        // Check if the selected file is an image
        if (selectedFile && selectedFile.type.startsWith('image/')) {
            setImage(URL.createObjectURL(selectedFile)); // Create a URL for the image
            setError('');
        } else {
            setImage(null);
            setError('Please upload a valid image file.');
        }
    };


    // Encrypting Data / or sending to server
    function encrypt(e) {
        e.preventDefault()
        let secretKey = "Shahrukh123"
        let encryptedData = {
            fullName: CryptoJS.AES.encrypt(fullName, secretKey).toString(),
            email: CryptoJS.AES.encrypt(email, secretKey).toString(),
            buisnessName: CryptoJS.AES.encrypt(buisnessName, secretKey).toString(),
            buisnessPhone: CryptoJS.AES.encrypt(buisnessPhone, secretKey).toString(),
            amountRequested: CryptoJS.AES.encrypt(amountRequested, secretKey).toString(),
            contactNo: CryptoJS.AES.encrypt(contactNo, secretKey).toString(),
            ownerShip: CryptoJS.AES.encrypt(ownerShip, secretKey).toString(),
            buisness: CryptoJS.AES.encrypt(buisness, secretKey).toString(),
        }
        console.log("The Encrypted Data", encryptedData)
        setFullName("")
        setEmail("")
        setBuisnessName("")
        setBuisnessPhone("")
        setAmountRequested("")
        setContactNo("")
        setOwnerShip("")
        setBuisness("")
        setImage(null)
        setFileKey((prevKey) => prevKey + 1); 
        alert("Form Has been sent successfully!")
    }


    return (
        <>
            <Navbar />
        <div className='m-10 p-4'>

            <div className='md:text-center text-left  md:ms-32 md:text-2xl text-lg mt-10 md:mb-10'><p>Please fill out and submit the form below. Our representative will inform you about other requirements for
                obtaining an loan policy:</p></div>


            <h1 className='ms-1 md:ms-36 md:px-2 text-2xl md:text-4xl font-semibold mt-20'>All fields are Required</h1>


            <form onSubmit={encrypt} >
                <div className='flex justify-center items-center flex-row flex-wrap'>

                    <div className='text-3xl p-4 m-2 flex flex-col items-center md:items-start gap-2'>
                        <label htmlFor='name'>Your Full Name <span className='text-red-400 mt-2 text-4xl'>*</span></label>
                        <input value={fullName} onChange={(e) => setFullName(e.target.value)} className='ps-2 py-3 mx-3 md:mx-0 md:py-5  md:px-32   rounded-lg bg-slate-100 w-80 md:w-auto' type='text' required />
                    </div>


                    <div className='text-3xl p-4 m-2 flex flex-col items-center md:items-start gap-2'>
                        <label htmlFor='name'>Email:<span className='text-red-400 mt-2 text-4xl'>*</span></label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='ps-2 py-3 mx-3 md:mx-0 md:py-5 md:px-32  rounded-lg bg-slate-100 w-80 md:w-auto' type='email' required />
                    </div>


                    <div className='text-3xl p-4 m-2 flex flex-col items-center md:items-start gap-2'>
                        <label htmlFor='name'>
                            Business Name: <span className='text-red-400 mt-2 text-4xl'>*</span></label>
                        <input value={buisnessName} onChange={(e) => setBuisnessName(e.target.value)} className='ps-2 py-3 mx-3 md:mx-0 md:py-5 md:px-32  rounded-lg bg-slate-100 w-80 md:w-auto' type='text' required />
                    </div>


                    <div className='text-3xl p-4 m-2 flex flex-col items-center md:items-start gap-2'>
                        <label htmlFor='name'>Business Phone:<span className='text-red-400 mt-2 text-4xl'>*</span></label>
                        <input value={buisnessPhone} onChange={(e) => setBuisnessPhone(e.target.value)} className='ps-2 py-3 mx-3 md:mx-0 md:py-5 md:px-32  rounded-lg bg-slate-100 w-80 md:w-auto' type='text' required />
                    </div>


                    <div className='text-3xl p-4 m-2 flex flex-col items-center md:items-start gap-2'>
                        <label htmlFor='name'>Amount Requested:<span className='text-red-400 mt-2 text-4xl'>*</span></label>
                        <input value={amountRequested} onChange={(e) => setAmountRequested(e.target.value)} className='ps-2 py-3 mx-3 md:mx-0 md:py-5 md:px-32  rounded-lg bg-slate-100 w-80 md:w-auto' type='text' required />
                    </div>


                    <div className='text-3xl p-4 m-2 flex flex-col items-center md:items-start gap-2'>
                        <label htmlFor='name'>Contact No:<span className='text-red-400 mt-2 text-4xl'>*</span></label>
                        <input value={contactNo} onChange={(e) => setContactNo(e.target.value)} className='ps-2 py-3 mx-3 md:mx-0 md:py-5 md:px-32  rounded-lg bg-slate-100 w-80 md:w-auto' type='text' required />
                    </div>



                    {/* ownerShip Options */}
                    <div className="flex flex-col justify-start items-center md:items-start text-4xl me-0">
                        <label htmlFor="options" className="mb-2 text-3xl">
                            Length of Ownership:<span className='text-red-400 mt-2 text-4xl'>*</span>
                        </label>
                        <select
                            id="options"
                            value={ownerShip}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 text-3xl ps-2 py-4 md:me-10 md:px-[190px] px-32 rounded-lg bg-slate-100"
                        >
                            <option value="1">less than 1 year</option>
                            <option value="2">2 years</option>
                            <option value="3">3 years</option>
                            <option value="5">5 years</option>
                            <option value="10">10 years</option>

                        </select>
                    </div>


                    {/* buisness Options */}
                    <div className="flex flex-col items-center md:items-start text-4xl mt-10 me-[-35px] m-10 ms-[8px]">
                        <label htmlFor="options" className="mb-2 text-3xl">
                            Type of Business:<span className='text-red-400 mt-2 text-3xl'>*</span>
                        </label>
                        <select
                            id="options"
                            value={buisness}
                            onChange={handlebuisness}
                            className="border border-gray-300 p-2 text-4xl ps-2 py-4 me-10 px-40 md:px-[205px] pe-50 rounded-lg bg-slate-100 "
                        >
                            <option value="audio">auto</option>
                            <option value="Beauty">Beauty</option>
                            <option value="restaurant">restaurant</option>
                            <option value="Contractor">Contractor</option>
                            <option value="HealthCare">HealthCare</option>

                        </select>
                    </div>



                </div>





                {/* Taking Image as an input */}
                <div className="flex flex-col md:flex-row items-center justify-between md:ms-40 mt-2">
                    <div>

                        <label htmlFor="imageUpload" className="mb-3 text-xl">
                            Upload Image:<span className='text-red-400 mt-2 '>*</span>
                        </label>
                        <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            key={fileKey} 
                            onChange={handleImageChange}
                            required
                            className="border border-gray-300 rounded p-2 mb-4"
                        />
                        {error && <p className="text-red-500">{error}</p>}



                    </div>
                        <button className=' bg-[#006738] text-[#FFFFFF] p-4 px-16 rounded-xl text-xl font-bold hover:bg-[#04200E] transition-all duration-300 mt-2 md:mt-0 md:me-36 cursor-pointer' type='submit'>submit</button>


                </div>



            </form>

        </div>

        </>

    )
}
