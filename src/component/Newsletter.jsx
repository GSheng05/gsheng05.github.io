import React from 'react'

const Newsletter = () => {
    return (
        <div id='contact' className='w-full py-16 bg-gradient-to-r from-orange-50 to-yellow-50 text-black px-4 border-t border-gray-100'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to stay ahead of the curve?</h1>
                    <p>Sign up to our newsletter for the latest data insights.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black bg-gray-200' type="email" placeholder='Enter Email' />
                        <button className='bg-[#f97316] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black hover:bg-[#c2410c]'>
                            Notify Me
                        </button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className='text-[#f97316] cursor-pointer'>Privacy Policy.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
