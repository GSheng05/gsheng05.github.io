import React, { useState, useEffect, useRef } from 'react';
import HeroBg from '../assets/hero_bg.png';
import CompanyVideo from '../assets/Company Video.mp4';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  // State 0: Video, 1: Static
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const handleVideoEnd = () => {
    // Automatically switch to static content when video ends
    setCurrentSlide(1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // When switching back to video slide, restart video? Or just play?
  // Usually if user goes back to video, they might expect it to play.
  useEffect(() => {
    if (currentSlide === 0 && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
    }
  }, [currentSlide]);

  return (
    <div id='home' className='relative w-full aspect-video md:aspect-auto md:h-[85vh] bg-black overflow-hidden group'>
      {/* Slide 0: Video */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      >
  <video
    ref={videoRef}
    src={CompanyVideo}
    className='w-full h-full object-cover'
    autoPlay
    muted
    playsInline
    onEnded={handleVideoEnd}
  />
      </div >

  {/* Slide 1: Static Content */ }
  < div
className = {`absolute top-0 left-0 w-full h-full text-black bg-gradient-to-b from-white to-orange-50 transition-opacity duration-1000 ease-in-out ${currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      >
        <img
          src={HeroBg}
          alt="Data Network"
          className='absolute top-0 left-0 w-full h-full object-cover opacity-60'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-white/60'></div>

        <div className='relative z-10 w-full h-full max-w-[800px] mx-auto flex flex-col justify-center text-center p-4'>
          <p className='text-[#f97316] font-bold p-1 md:p-2 tracking-widest uppercase text-[10px] md:text-sm'>Data Analytics & Consulting</p>
          <h1 className='md:text-7xl sm:text-6xl text-2xl font-extrabold py-2 md:py-6 text-gray-800 tracking-tight'>
            Unlock Data <span className='text-[#f97316]'>Potential.</span>
          </h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-sm font-bold py-1 md:py-4'>
              Strategic Insights for Growth
            </p>
          </div>
          <p className='md:text-2xl text-xs font-bold text-gray-600 hidden sm:block'>
            We help businesses transform raw data into actionable strategies through advanced analytics and machine learning.
          </p>
          <HashLink smooth to="/#services" className='bg-[#f97316] w-[140px] md:w-[200px] rounded-md font-medium mx-auto my-2 md:my-6 px-3 py-1 md:px-6 md:py-3 text-sm md:text-base text-black hover:bg-[#c2410c] transition-colors duration-300 block pt-2 md:pt-3 text-center'>Get Started</HashLink>
        </div>
      </div >

  {/* Navigation Arrows */ }
  < div className = 'absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors z-20 block md:hidden md:group-hover:block' onClick = { prevSlide } >
    <FaChevronLeft size={30} />
      </div >
  <div className='absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors z-20 block md:hidden md:group-hover:block' onClick={nextSlide}>
    <FaChevronRight size={30} />
  </div>

{/* Slide Indicators (Optional but good for UX) */ }
<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20'>
  <div
    onClick={() => setCurrentSlide(0)}
    className={`h-2 w-2 rounded-full cursor-pointer transition-all ${currentSlide === 0 ? 'bg-[#f97316] w-6' : 'bg-gray-400'}`}
  ></div>
  <div
    onClick={() => setCurrentSlide(1)}
    className={`h-2 w-2 rounded-full cursor-pointer transition-all ${currentSlide === 1 ? 'bg-[#f97316] w-6' : 'bg-gray-400'}`}
  ></div>
</div>

    </div >
  )
}

export default Hero