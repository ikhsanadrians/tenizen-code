import React from 'react'
import { MdSettingsSuggest } from "react-icons/md";
import WhyUsCard from '../partials/whyuscard';
import { RiTeamFill } from "react-icons/ri";
import { FaUserShield } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";



const WhyUs = () => {
    return (
        <div className="container mx-auto flex justify-center max-h-full h-screen mt-28 lg:mt-72 mb-52">
            <div className="flex flex-col items-center gap-4 w-full">
                <div className="servicesectiontitle w-fit flex items-center gap-2 border-[1.5px] border-neutral-700 px-4 py-1 rounded-3xl">
                    <p className='text-xl font-medium text-neutral-700'>
                        Why Choose Us?
                    </p>
                    <MdSettingsSuggest size={25} className="fill-neutral-700" />
                </div>
                <div className="why-us-container px-8 mt-8 w-full grid lg:grid-cols-3 gap-4 grid-cols-1">
                    <WhyUsCard>
                        <RiTeamFill size={30} className='fill-neutral-800' />
                        <div className="title font-bold text-xl text-neutral-700 group-hover:text-primary duration-100">
                            <h1>Expert Team</h1>
                        </div>
                        <div className="description text-neutral-600 mt-2">
                            <p>Our skilled team specializes in modern technologies, ensuring top-quality solutions.</p>
                        </div>
                    </WhyUsCard>
                    <WhyUsCard>
                        <FaUserShield size={30} className='fill-neutral-800' />
                        <div className="title font-bold text-xl text-neutral-700 group-hover:text-primary duration-100">
                            <h1>Client-Focused</h1>
                        </div>
                        <div className="description text-neutral-600 mt-2">
                            <p>We tailor our services to meet your specific needs, ensuring personalized and effective IT solutions.</p>
                        </div>
                    </WhyUsCard>
                    <WhyUsCard>
                        <IoShieldCheckmark size={30} className='fill-neutral-800' />
                        <div className="title font-bold text-xl text-neutral-700 group-hover:text-primary duration-100">
                            <h1>Proven Success</h1>
                        </div>
                        <div className="description text-neutral-600 mt-2">
                            <p>With a history of successful projects, we deliver reliable and impactful results for your business.</p>
                        </div>
                    </WhyUsCard>
                </div>
            </div>

        </div>
    )
}

export default WhyUs
