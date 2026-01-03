import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'
import Logo from '../assets/Neuralytic_Logo.png'

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-800'>
            <div>
                <div className='flex items-center gap-2 mb-2'>
                    <img src={Logo} alt="Neuralytic Logo" className='h-8 w-auto object-contain' />
                    <h1 className='w-full text-3xl font-bold text-[#f97316]'>NEURALYTIC.</h1>
                </div>
                <p className='py-4 text-gray-600'>Empowering businesses through data excellence. We turn complex data into clear, actionable strategies.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} className='hover:text-[#f97316] cursor-pointer' />
                    <FaInstagram size={30} className='hover:text-[#f97316] cursor-pointer' />
                    <FaTwitterSquare size={30} className='hover:text-[#f97316] cursor-pointer' />
                    <FaGithubSquare size={30} className='hover:text-[#f97316] cursor-pointer' />
                    <FaDribbbleSquare size={30} className='hover:text-[#f97316] cursor-pointer' />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-500'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm hover:text-black cursor-pointer'>Analytics</li>
                        <li className='py-2 text-sm hover:text-black cursor-pointer'>Marketing</li>
                        <li className='py-2 text-sm hover:text-black cursor-pointer'>Commerce</li>
                        <li className='py-2 text-sm hover:text-black cursor-pointer'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-500'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm hover:text-black cursor-pointer'>About</li>
                        <li className='py-2 text-sm hover:text-black cursor-pointer'>Blog</li>
                        <li className='py-2 text-sm hover:text-black cursor-pointer'>Jobs</li>
                        <li className='py-2 text-sm hover:text-black cursor-pointer'>Press</li>
                        <li className='py-2 text-sm hover:text-black cursor-pointer'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-500'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm hover:text-black cursor-pointer'>Claim</li>
                        <li className='py-2 text-sm hover:text-black cursor-pointer'>Policy</li>
                        <li className='py-2 text-sm hover:text-black cursor-pointer'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
