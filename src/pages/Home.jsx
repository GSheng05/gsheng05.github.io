import React from 'react';
import Hero from '../component/Hero';
import About from '../component/About';
import Services from '../component/Services';
import Cards from '../component/Cards';
import Newsletter from '../component/Newsletter';

const Home = () => {
    return (
        <div>
            <Hero />
            {/* 
      <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2'>
            <div className='my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Watch our latest video</h1>
                <p>Learn more about our services.</p>
            </div>
            <div className='my-4'>
                 <video src="path_to_video.mp4" controls className='w-full shadow-xl rounded-lg' />
            </div>
        </div>
      </div> 
      */}
            <About />
            <Services />
            <Cards />
            <Newsletter />
        </div>
    );
};

export default Home;
