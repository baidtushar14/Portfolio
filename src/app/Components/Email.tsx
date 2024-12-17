/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react';
import Linkedin from '../../../public/images/linkedin.png';
import Github from '../../../public/images/github-sign.png';
import Image from 'next/image';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
// import { sendContactForm } from '../lib/api';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function EmailComponent() {
    const form = useRef<HTMLFormElement | null>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [alert, setAlert] = useState<{ severity: 'success' | 'error'; message: string } | null>(null);
    // const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.current !== null) {
            emailjs
                .sendForm('service_589ghla', 'template_fi7oom9', form.current, '5qRE4RfTwMiBmnmhp')
                .then(
                    () => {
                        setFormSubmitted(true);
                        setAlert({ severity: 'success', message: 'Mail is sent successfully.' });
                        form.current?.reset();
                    },
                    (error) => {
                        setAlert({ severity: 'error', message: `Failed to send mail. Please try again. ${error.text}` });
                    }
                );
        } else {
            console.log('Form reference is not initialized.');
        }
    };

    return (
        <div className='flex flex-col md:flex-row xl:min-h-screen px-12 items-center w-full justify-evenly md:justify-around md:mt-12 mt-8 mb-8' id='contact'>
            <div style={{ background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(167,77,244,1) 100%)' }}></div>
            <div className='w-[90%] md:w-[60%]'>
                <h5 className='text-2xl font-bold text-white my-2 md:text-4xl'>Let&apos;s Connect</h5>
                <p className='text-[#ADB7BE] mb-3 text-xl w-3/4'>If you&apos;re looking for someone who combines strategic thinking with a creative edge, let&apos;s connect and explore the possibilities of collaboration.</p>
                <div className='socials flex gap-2 px-10 justify-center items-center xl:w-1/2 md:w-1/3 py-4 xl:py-0'>
                    <Link href={'https://github.com/baidtushar14'}>
                        <Image src={Github} alt='github icon' width={50} className='bg-white rounded-full' />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/tushar-baid/'}>
                        <Image src={Linkedin} alt='Linkedin icon' width={50} className='bg-white rounded-full' />
                    </Link>
                </div>
            </div>
            <div className='w-[90%] md:w-[50%]'>
                <form ref={form} className='flex flex-col' onSubmit={sendEmail}>
                    <div className='mb-4'>
                        <label htmlFor='from_name' className='text-white block text-sm font-medium md:text-lg'>Your Name</label>
                        <input type='text' id='from_name' name='from_name' required placeholder='Test' className='w-full bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block mt-2 p-2.5' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='from_email' className='text-white block text-sm font-medium md:text-lg'>Your Email</label>
                        <input type='email' id='from_email' name='from_email' required placeholder='test@gmail.com' className='w-full bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block mt-2 p-2.5' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='subject' className='text-white block text-sm font-medium md:text-lg'>Subject</label>
                        <input type='text' id='subject' name='subject' required placeholder='Purpose of Email' className='w-full bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block mt-2 p-2.5' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='message' className='text-white block text-sm font-medium md:text-lg'>Message</label>
                        <textarea name='message' id='message' required placeholder='Leave your message' className='w-full bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block mt-2 p-2.5' />
                    </div>
                    <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 w-full md:text-lg'>Send Message</button>
                </form>
                {alert && (
                    <Alert severity={alert.severity} className='mt-4'>
                        <AlertTitle>{alert.severity === 'success' ? 'Success' : 'Error'}</AlertTitle>
                        {alert.message}
                    </Alert>
                )}
            </div>
        </div>
    );
}