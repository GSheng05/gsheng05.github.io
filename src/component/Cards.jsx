import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
    return (
        <div id='plans' className='w-full py-[10rem] px-4 bg-gradient-to-b from-orange-50/30 to-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-md shadow-orange-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white border border-gray-100'>
                    <h2 className='text-2xl font-bold text-center py-8 text-black'>Starter Analysis</h2>
                    <p className='text-center text-4xl font-bold text-black'>$5,000</p>
                    <div className='text-center font-medium text-black'>
                        <p className='py-2 border-b border-gray-300 mx-8 mt-8'>Initial Data Audit</p>
                        <p className='py-2 border-b border-gray-300 mx-8 '>Basic Reporting</p>
                        <p className='py-2 border-b border-gray-300 mx-8 '>1 Month Support</p>
                    </div>
                    <button className='bg-[#f97316] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black'>Select Plan</button>
                </div>
                <div className='w-full shadow-md shadow-orange-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 bg-white border border-gray-100'>
                    <h2 className='text-2xl font-bold text-center py-8 text-black'>Corporate Strategy</h2>
                    <p className='text-center text-4xl font-bold text-black'>$15,000</p>
                    <div className='text-center font-medium text-black'>
                        <p className='py-2 border-b border-gray-300 mx-8 mt-8'>Predictive Modeling</p>
                        <p className='py-2 border-b border-gray-300 mx-8 '>Custom Dashboards</p>
                        <p className='py-2 border-b border-gray-300 mx-8 '>6 Months Support</p>
                    </div>
                    <button className='bg-[#f97316] text-black w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>Select Plan</button>
                </div>
                <div className='w-full shadow-md shadow-orange-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 bg-white border border-gray-100'>
                    <h2 className='text-2xl font-bold text-center py-8 text-black'>Enterprise AI</h2>
                    <p className='text-center text-4xl font-bold text-black'>Custom</p>
                    <div className='text-center font-medium text-black'>
                        <p className='py-2 border-b border-gray-300 mx-8 mt-8'>Full ML Pipeline</p>
                        <p className='py-2 border-b border-gray-300 mx-8 '>Dedicated Team</p>
                        <p className='py-2 border-b border-gray-300 mx-8 '>24/7 Support</p>
                    </div>
                    <button className='bg-[#f97316] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
