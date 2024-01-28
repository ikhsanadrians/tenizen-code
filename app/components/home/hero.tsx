import React from 'react'

const Hero = () => {
    return (
        <div className="container mx-auto flex justify-center">
            <div className="flex flex-col items-center  mt-24 ">
                <div className="text-hero flex flex-col items-center">
                    <div className="font-extrabold text-transparent text-5xl  tracking-wide bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
                        Welcome to TenizenCode
                    </div>
                    <div className="font-extrabold text-transparent text-5xl tracking-wide bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
                        Your Best IT Services Provider
                    </div>
                </div>
                <div className="description w-3/4 mt-5">
                    <p className='text-center'>Elevate your digital experience with TenizenCode, where we craft seamless web applications, stunning designs, and coding tutorials. Connect, collaborate, and conquer your goals effortlessly with our comprehensive solutions.</p>
                </div>

            </div>
            <div className=" absolute w-[90%] top-[20%] h-[300px] z-[-99] "><svg xmlns="http://www.w3.org/2000/svg" id="patternId" width="100%" height="100%"><defs><pattern id="a" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="scale(3) rotate(0)"><rect x="0" y="0" width="100%" height="100%" fill="hsla(0, 0%, 100%, 0)"></rect><path d="M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z" stroke-width="0.5" className="stroke-[#0000007a] dark:stroke-[#ffffff6e]" fill="none"></path></pattern></defs><rect width="800%" height="800%" transform="translate(0,0)" fill="url(#a)"></rect></svg><div className="bg-gradient-to-b from-white dark:from-black from-20% to-transparent absolute inset-0 "></div><div className="bg-gradient-to-l from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div><div className="bg-gradient-to-r from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div><div className="bg-gradient-to-t from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div></div>
        </div>
    )
}

export default Hero
