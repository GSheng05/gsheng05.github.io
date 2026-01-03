import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../assets/Neuralytic_Logo.png';

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <>
            <div className='sticky top-0 z-50 bg-white/95 backdrop-blur-sm w-full shadow-sm shadow-orange-100'>
                <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
                    <Link to="/" className='flex items-center gap-2'>
                        <img src={Logo} alt="Neuralytic Logo" className='h-10 w-auto object-contain' />
                        <h1 className='text-3xl font-bold text-[#f97316] m-0'>NEURALYTIC.</h1>
                    </Link>
                    <ul className='hidden md:flex whitespace-nowrap'>
                        <li className='p-4 hover:text-[#f97316] cursor-pointer'><Link to="/">Home</Link></li>
                        <li className='p-4 hover:text-[#f97316] cursor-pointer'><HashLink smooth to="/#about">About Us</HashLink></li>
                        <li className='p-4 hover:text-[#f97316] cursor-pointer'><HashLink smooth to="/#services">Services</HashLink></li>
                        <li className='p-4 hover:text-[#f97316] cursor-pointer'><HashLink smooth to="/#plans">Plans</HashLink></li>
                        <li className='p-4 hover:text-[#f97316] cursor-pointer'><Link to="/team">Team</Link></li>
                        <li className='p-4 hover:text-[#f97316] cursor-pointer'><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                        <AiOutlineMenu size={20} />
                    </div>
                </div>
            </div>

            {/* Backdrop Overlay */}
            {nav && <div className="fixed inset-0 bg-black/60 z-[55] md:hidden" onClick={handleNav}></div>}

            {/* Mobile Menu */}
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] h-full border-r border-r-gray-200 bg-white ease-in-out duration-500 z-[60]' : 'fixed left-[-100%] ease-in-out duration-500 z-[60]'}>
                <div className='flex items-center justify-between m-4'>
                    <Link onClick={handleNav} to="/" className='flex items-center gap-2'>
                        <img src={Logo} alt="Neuralytic Logo" className='h-8 w-auto object-contain' />
                        <h1 className='w-full text-2xl font-bold text-[#f97316] truncate'>NEURALYTIC.</h1>
                    </Link>
                    <div onClick={handleNav} className='cursor-pointer p-2 rounded-full hover:bg-gray-100'>
                        <AiOutlineClose size={20} />
                    </div>
                </div>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-300'><Link onClick={handleNav} to="/">Home</Link></li>
                    <li className='p-4 border-b border-gray-300'><HashLink onClick={handleNav} smooth to="/#about">About Us</HashLink></li>
                    <li className='p-4 border-b border-gray-300'><HashLink onClick={handleNav} smooth to="/#services">Services</HashLink></li>
                    <li className='p-4 border-b border-gray-300'><HashLink onClick={handleNav} smooth to="/#plans">Plans</HashLink></li>
                    <li className='p-4 border-b border-gray-300'><Link onClick={handleNav} to="/team">Team</Link></li>
                    <li className='p-4'><Link onClick={handleNav} to="/contact">Contact</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;