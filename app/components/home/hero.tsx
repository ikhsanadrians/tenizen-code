import React from 'react'

const Hero = () => {
    return (
        <div className="container mx-auto flex justify-center h-full max-h-screen">
            <div className="flex flex-col items-center  mt-32 lg:px-0 px-4 relative">
                <div className="text-hero flex flex-col items-center text-center text-3xl lg:text-5xl" data-aos="fade-up">
                    <div className="font-extrabold tracking-wide bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 bg-clip-text text-transparent first-letter:bg-clip-text">
                        Welcome to TenizenCode
                    </div>
                    <div className="font-extrabold text-transparent tracking-wide bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 bg-clip-text text-transparent">
                        Your Best IT Services Provider
                    </div>
                </div>
                <div className="description w-full px-4 lg:w-3/4 mt-5" data-aos="fade-up">
                    <p className='text-center text-lg'>Elevate your digital experience with TenizenCode, where we craft seamless web applications, stunning designs, and coding tutorials. Connect, collaborate, and conquer your goals effortlessly with our comprehensive solutions.</p>
                </div>
                <button data-aos="fade-up" className='bg-neutral-800 text-white px-4 py-2 mt-6 rounded-lg font-semibold hover:bg-primary duration-500'>
                    Get Started
                </button>

            </div>
            <div className=" absolute w-[90%] top-[20%] h-[300px] z-[-99] lg:block hidden"><svg xmlns="http://www.w3.org/2000/svg" id="patternId" width="100%" height="100%"><defs><pattern id="a" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="scale(3) rotate(0)"><rect x="0" y="0" width="100%" height="100%" fill="hsla(0, 0%, 100%, 0)"></rect><path d="M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z" stroke-width="0.5" className="stroke-[#0000007a] dark:stroke-[#ffffff6e]" fill="none"></path></pattern></defs><rect width="800%" height="800%" transform="translate(0,0)" fill="url(#a)"></rect></svg><div className="bg-gradient-to-b from-white dark:from-black from-20% to-transparent absolute inset-0 "></div><div className="bg-gradient-to-l from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div><div className="bg-gradient-to-r from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div><div className="bg-gradient-to-t from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div></div>
        </div>
    )
}

export default Hero
