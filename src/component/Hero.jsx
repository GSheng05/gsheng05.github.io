import React from 'react'
import HeroBg from '../assets/hero_bg.png';

const Hero = () => {
  return (

    <div id='home' className='relative w-full h-screen text-black bg-gradient-to-b from-white to-orange-50'>

      <img
        src={HeroBg}
        alt="Data Network"
        className='absolute top-0 left-0 w-full h-full object-cover opacity-60'
      />

      <div className='absolute top-0 left-0 w-full h-full bg-white/60'></div>

      <div className='relative z-10 w-full h-full max-w-[800px] mx-auto flex flex-col justify-center text-center p-4'>
        <p className='text-[#f97316] font-bold p-2 tracking-widest uppercase text-sm'>Data Analytics & Consulting</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6 text-gray-800 tracking-tight'>
          Unlock Data <span className='text-[#f97316]'>Potential.</span>
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Strategic Insights for Growth
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-600'>
          We help businesses transform raw data into actionable strategies through advanced analytics and machine learning.
        </p>
        <button className='bg-[#f97316] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black hover:bg-[#c2410c] transition-colors duration-300'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero