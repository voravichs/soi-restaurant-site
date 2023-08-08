import React, { useRef, useContext, useEffect } from 'react';
import { RestaurantContext } from '../../contexts/RestaurantContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { setRestaurant } = useContext(RestaurantContext);

    useEffect(() => {
        setRestaurant(2);
    });

    useEffect(() => emailjs.init(process.env.REACT_APP_USER_ID), []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
        ).then(
            (result) => {
                console.log(result.text);
                console.log("message sent!")
                
            }, (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
    };

    return (
        <div className='block m-auto w-1/2 py-16'>
            <p className='w-full font-serif text-center text-4xl font-bold'>Contact Us</p>
            <form className='flex items-start flex-col w-full text-xl' ref={form} onSubmit={sendEmail}>
                <label type="text" className='font-serif font-bold text-2xl mt-4'>
                    Name
                </label>
                <input className='w-full h-9 p-2 outline-0 rounded border-2 border-slate-100 focus:border-emerald-500' type="text" name="user_name" />
                
                <label className='font-serif font-bold text-2xl mt-4'>
                    Email
                </label>
                <input className='w-full h-9 p-2 outline-0 rounded border-2 border-slate-100 focus:border-emerald-500' type="email" name="user_email" />

                <label className='font-serif font-bold text-2xl mt-4'>
                    Message
                </label>
                <textarea className='max-w-full min-w-full w-full max-h-[100px] min-h-[100px] p-2 outline-0 rounded border focus:border-emerald-500' name="message" />

                <div className='w-full flex justify-center'>
                    <input className='w-1/2 mt-8 py-2 cursor-pointer bg-orange-500 text-white border-0' type="submit" value='Send' />
                </div>
            </form>
        </div>
    );
};

export default Contact;