import React from 'react';
import { FaDatabase, FaChartLine, FaDesktop } from 'react-icons/fa';

const Services = () => {
    return (
        <div id='services' className='w-full bg-orange-50/30 py-16 px-4 text-black'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center pb-12'>
                    <p className='text-[#f97316] font-bold uppercase'>What We Do</p>
                    <h1 className='text-4xl font-bold py-2'>Our Services</h1>
                </div>

                <div className='grid md:grid-cols-3 gap-8'>

                    <div className='w-full shadow-md shadow-orange-100 flex flex-col justify-between p-8 my-4 rounded-lg hover:scale-105 duration-300 bg-white h-full relative border border-gray-100'>
                        <div>
                            <FaDatabase className='w-20 h-20 mx-auto mt-[-4rem] text-[#f97316] bg-white p-2 rounded-full border border-gray-100 shadow-sm' />
                            <h2 className='text-2xl font-bold text-center py-8 text-[#f97316]'>Data Consulting</h2>
                            <p className='text-center text-gray-600 min-h-[60px]'>
                                Expert guidance to align data strategies with business goals.
                            </p>
                        </div>
                        <div className='text-center font-medium mt-4'>
                            <p className='py-2 border-b border-gray-200 mx-8'>Strategy Development</p>
                            <p className='py-2 border-b border-gray-200 mx-8'>Infrastructure Audit</p>
                            <p className='py-2 border-b border-gray-200 mx-8'>Roadmap Planning</p>
                        </div>
                    </div>

                    <div className='w-full shadow-md shadow-orange-100 flex flex-col justify-between p-8 my-4 rounded-lg hover:scale-105 duration-300 bg-white h-full relative border border-gray-100'>
                        <div>
                            <FaChartLine className='w-20 h-20 mx-auto mt-[-4rem] text-[#eab308] bg-white p-2 rounded-full border border-gray-100 shadow-sm' />
                            <h2 className='text-2xl font-bold text-center py-8 text-[#eab308]'>Predictive Analytics</h2>
                            <p className='text-center text-gray-600 min-h-[60px]'>
                                Forecast future trends with advanced machine learning models.
                            </p>
                        </div>
                        <div className='text-center font-medium mt-4'>
                            <p className='py-2 border-b border-gray-200 mx-8'>Sales Forecasting</p>
                            <p className='py-2 border-b border-gray-200 mx-8'>Risk Management</p>
                            <p className='py-2 border-b border-gray-200 mx-8'>Customer Churn</p>
                        </div>
                    </div>

                    <div className='w-full shadow-md shadow-orange-100 flex flex-col justify-between p-8 my-4 rounded-lg hover:scale-105 duration-300 bg-white h-full relative border border-gray-100'>
                        <div>
                            <FaDesktop className='w-20 h-20 mx-auto mt-[-4rem] text-[#f97316] bg-white p-2 rounded-full border border-gray-100 shadow-sm' />
                            <h2 className='text-2xl font-bold text-center py-8 text-[#f97316]'>BI Solutions</h2>
                            <p className='text-center text-gray-600 min-h-[60px]'>
                                Visual dashboards to monitor KPIs in real-time.
                            </p>
                        </div>
                        <div className='text-center font-medium mt-4'>
                            <p className='py-2 border-b border-gray-200 mx-8'>Real-time Dashboards</p>
                            <p className='py-2 border-b border-gray-200 mx-8'>Custom Reporting</p>
                            <p className='py-2 border-b border-gray-200 mx-8'>Data Integration</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;