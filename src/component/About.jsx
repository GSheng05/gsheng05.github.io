import React from 'react';
import DummyImg from '../assets/board.jpg';

const About = () => {

    return (
        <div id='about' className='w-full bg-gradient-to-br from-white to-orange-50/50 py-16 px-4 text-black'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12 items-center'>

                <div className='w-full h-full relative'>
                    <img
                        src={DummyImg}
                        alt="Neuralytic Team"
                        className='w-full h-full object-cover rounded-lg shadow-xl'
                    />
                    <div className='absolute -z-10 top-4 -left-4 w-full h-full bg-[#f97316] rounded-lg'></div>
                </div>

                <div className='flex flex-col justify-center'>
                    <p className='text-[#f97316] font-bold uppercase text-xl'>About Us</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Driving Innovation Through Data</h1>
                    <p className='py-4 text-gray-600 leading-relaxed'>
                        At Neuralytic, we believe that data is the lifeblood of modern business.
                        Founded by a team of visionary Computer Science graduates, our agency was born from a passion to bridge the gap between complex data algorithms and improved business outcomes.
                        <br /><br />
                        Our team of dedicated data scientists and engineers work tirelessly to
                        uncover hidden insights that drive efficiency, growth, and innovation. We don't just process numbers; we tell stories that help you make smarter decisions.
                    </p>

                    <div className='grid gap-4 mt-6'>
                        <div className='bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#f97316] hover:shadow-md transition duration-300'>
                            <h3 className='font-bold text-xl mb-2 text-black'>Our Mission</h3>
                            <p className='text-gray-600 text-sm'>To provide cutting edge predictive analytics that optimize business efficiency, design intuitive data visualization tools that simplify complex decision making and to foster a culture of ethical AI and data transparency.</p>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#eab308] hover:shadow-md transition duration-300'>
                            <h3 className='font-bold text-xl mb-2 text-black'>Our Vision</h3>
                            <p className='text-gray-600 text-sm'>Our vision is to be the leading data analytics consultant in the Asia Pacific region, making advanced predictions and analysis reports accessible to enterprises of all sizes.</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className='font-bold text-xl mb-4 text-[#f97316]'>Our Core Values</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Innovation:</strong> Constantly pushing boundaries.</li>
                                <li><strong>Integrity:</strong> Data you can trust.</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Collaboration:</strong> We work with you, not just for you.</li>
                                <li><strong>Excellence:</strong> Delivering quality in every byte.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;