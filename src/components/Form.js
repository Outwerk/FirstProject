import React, { useState ,useRef} from 'react'
import emailjs from '@emailjs/browser';


export default function Form() {

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[message,setMessage]=useState("")

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_zlbzzge', 'template_p4uc4dj', form.current, {
            publicKey: 'TEWLCfIXDTt3zbEfs',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              console.log(form.current)
                setName("")
                setEmail("")
                setMessage("")

            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className='text-3xl p-4 m-2 flex flex-col items-center md:items-start gap-1'>

                <label htmlFor='name' className='text-xl md:text-2xl'>Enter Your Name <span className='text-red-700 mt-2 text-2xl'>*</span></label>
                <input value={name} onChange={(e)=> setName(e.target.value)} name='userName' className='ps-2 py-2 rounded-lg bg-slate-100' type='text' id='name' required />
            </div>

            <div className='text-3xl p-4 m-2 flex flex-col items-center md:items-start gap-2'>

                <label htmlFor='email' className='text-xl md:text-2xl'>Enter Your Email <span className='text-red-700 mt-2 text-2xl'>*</span></label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" name="userEmail" className='ps-2 py-2 rounded-lg bg-slate-100'  id='email' required />
            </div>

            <div className='text-3xl p-4 m-2 flex flex-col items-center md:items-start gap-2'>

                <label htmlFor='message' className='text-xl md:text-2xl'>Enter Your Message <span className='text-red-700 mt-2 text-2xl'>*</span></label>
                <textarea value={message} onChange={(e)=> setMessage(e.target.value)}  rows="5" cols="20" className=' pt-2 px-1 md:px-1  rounded-lg bg-slate-100'  id="message" name='message' placeholder='Enter text here...' required></textarea>
            </div>

            <button className=' bg-[#006738] text-[#FFFFFF] p-4 px-20 rounded-xl text-xl font-bold hover:bg-[#04200E] transition-all duration-300 ms-24 cursor-pointer' type="submit" value="Send">submit</button>
        </form>
    )
}
