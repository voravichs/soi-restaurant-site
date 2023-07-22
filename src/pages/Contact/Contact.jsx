import React, { useRef } from 'react';
//import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
    //  e.preventDefault();
  
    //   emailjs.sendForm('service_9bh2ipx', 'template_xnxmmxt', form.current, 'tO_Q719b9BFxRuJsA')
    //     .then((result) => {
    //         console.log(result.text);
    //         console.log("message sent!")
    //         e.target.reset();
    //     }, (error) => {
    //         console.log(error.text);
    //     });
      console.log("Sent Message!");
    };

    return (
        <div className='block m-auto w-1/2 py-16'>
            <form className='flex items-start flex-col w-full text-xl' onSubmit={sendEmail}>
                <label className='mt-4'>
                    Name
                </label>
                <input className='w-full h-9 p-2 outline-0 rounded border-2 border-slate-100 focus:border-emerald-500' type="text" name="user_name" />
                <label className='mt-4'>
                    Email
                    </label>
                <input className='w-full h-9 p-2 outline-0 rounded border-2 border-slate-100 focus:border-emerald-500' type="email" name="user_email" />
                <label className='mt-4'>
                    Message
                </label>
                <textarea className='max-w-full min-w-full w-full max-h-[100px] min-h-[100px] p-2 outline-0 rounded border-slate-100 focus:border-emerald-500' name="message" />
                <div className='w-full flex justify-center'>
                    <input className='w-1/2 mt-8 py-2 cursor-pointer bg-orange-500 text-white border-0' type="submit" value='Send'/>
                </div>
            </form>
        </div>
    );
};

export default Contact;