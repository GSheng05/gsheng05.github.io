import React from 'react';

const ContactUs = () => {
    return (
        <div className='w-full py-16 text-black px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-8'>
                <div className='flex flex-col justify-center'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#f97316]'>Contact Us</h1>
                    <p className='py-4 text-gray-600'>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                    <div className='flex flex-col space-y-4 text-gray-600'>
                        <p><strong>Email:</strong> support@neuralytic.com</p>
                        <p><strong>Phone:</strong> +60 3-5555 1234</p>
                        <p><strong>Address:</strong> Level 23, Menara Neuralytic, Jalan Tun Razak, 50400 Kuala Lumpur, Malaysia</p>
                    </div>
                </div>
                <div className='bg-[#f97316] p-4 rounded-lg text-black shadow-lg'>
                    <form className='flex flex-col space-y-4'>
                        <div className='flex flex-col'>
                            <label className='font-bold text-sm py-2'>Name</label>
                            <input className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eab308]' type="text" placeholder='Your Name' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-bold text-sm py-2'>Email</label>
                            <input className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eab308]' type="email" placeholder='Your Email' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-bold text-sm py-2'>Message</label>
                            <textarea className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eab308]' rows='5' placeholder='Your Message'></textarea>
                        </div>
                        <button className='bg-black text-[#f97316] font-bold rounded-md py-3 mt-4 hover:bg-gray-800 transition duration-300'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
