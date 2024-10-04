
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import CryptoJS from 'crypto-js'

export default function HeroForm() {

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
    const [file, setFile] = useState(null);
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
        const setFile = event.target.files[0];
        // Check if the selected file is an image
        if (selectedFile && selectedFile.type.startsWith('image/')) {
            setImage(URL.createObjectURL(selectedFile)); // Create a URL for the image
            setError('');
        } else {
            setImage(null);
            setError('Please upload a valid image file.');
        }
    };


    // Encrypting Data 
    function encrypt() {

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

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2ctpksq', 'template_s2u4eck', form.current, {
            publicKey: '_PPs8ZgMRarry37fH',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            //   console.log(form.current)
                encrypt()
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };




    


    return (
        <div className=''>
            <main
                className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
            >
                <div className="max-w-xl lg:max-w-3xl">
                    <form ref={form} onSubmit={sendEmail} className="mt-8 grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="fullName"
                                className="block text-sm font-medium text-gray-700 "
                            >
                                FullName<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="mt-1 w-full rounded-md border border-[#006738] bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 "
                            >
                                Email<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 w-full rounded-md border border-[#006738] bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>


                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="businessName"
                                className="block text-sm font-medium text-gray-700 "
                            >
                                Buisness Name<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={buisnessName}
                                onChange={(e) => setBuisnessName(e.target.value)}
                                type="text"
                                id="businessName"
                                name="businessName"
                                className="mt-1 w-full rounded-md border border-[#006738] bg-white text-sm text-gray-700 shadow-sm  p-1"
                                required
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="businessPhone"
                                className="block text-sm font-medium text-gray-700 "
                            >
                                Business Phone<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={buisnessPhone}
                                onChange={(e) => setBuisnessPhone(e.target.value)}
                                type="text"
                                id="businessPhone"
                                name="businessPhone"
                                className="mt-1 w-full rounded-md border border-[#006738] bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="amountRequested"
                                className="block text-sm font-medium text-gray-700 "
                            >
                                Amount Requested<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={amountRequested}
                                onChange={(e) => setAmountRequested(e.target.value)}
                                type="text"
                                id="amountRequested"
                                name="amountRequested"
                                className="mt-1 w-full rounded-md border border-[#006738] bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="contactNo"
                                className="block text-sm font-medium text-gray-700 "
                            >
                                Contact No<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={contactNo}
                                onChange={(e) => setContactNo(e.target.value)}
                                type="text"
                                id="contactNo"
                                name="contactNo"
                                className="mt-1 w-full rounded-md border border-[#006738] bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>

                        {/* OwnerShip */}
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="options" className="block text-sm font-medium text-gray-700 ">
                                Length of Ownership:<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>
                            <select
                                id="options"
                                value={ownerShip}
                                name="ownerShip"
                                onChange={handleChange}
                                className="mt-1 w-full rounded-md border border-[#006738] bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            >
                                <option value="1">less than 1 year</option>
                                <option value="2">2 years</option>
                                <option value="3">3 years</option>
                                <option value="5">5 years</option>
                                <option value="10">10 years</option>

                            </select>
                        </div>


                        {/* type Of business */}
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="options" className="block text-sm font-medium text-gray-700 ">
                                Type of Business:<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>
                            <select
                                id="options"
                                name='typeOfBusiness'
                                value={buisness}
                                onChange={handlebuisness}
                                className="mt-1 w-full rounded-md border border-[#006738] bg-white text-sm text-gray-700 shadow-sm p-1 "
                                required
                            >
                                <option value="audio">auto</option>
                                <option value="Beauty">Beauty</option>
                                <option value="restaurant">restaurant</option>
                                <option value="Contractor">Contractor</option>
                                <option value="HealthCare">HealthCare</option>
                            </select>
                        </div>

                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4 place-content-center">

                            <label htmlFor="imageUpload" className="mb-3 text-xl">
                                Upload Image:<span className='text-red-400 mt-2 '>*</span>
                            </label>
                            <input
                                type="file"
                                id="imageUpload"
                                name="attachment"
                                accept="image/*"
                                key={fileKey}
                                onChange={handleImageChange}
                                required
                                className="border border-gray-300 rounded p-1 "
                            />
                            {error && <p className="text-red-500">{error}</p>}

                            <button
                                className="inline-block shrink-0 rounded-md border border-[#006738]  px-8 py-2 text-lg font-semibold bg-[#006738] text-[#FFFFFF] transition hover:bg-[#04200E] mt-5 md:mt-0 focus:outline-none focus:ring active:text-blue-500 "
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}
