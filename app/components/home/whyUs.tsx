import React from 'react'
import { MdSettingsSuggest } from "react-icons/md";

const WhyUs = () => {
    return (
        <div className="container mx-auto flex justify-center max-h-full h-screen mt-72 mb-52">
            <div className="flex flex-col">
                <div className="servicesectiontitle flex items-center gap-2 border-[1.5px] border-neutral-700 px-4 py-1 rounded-3xl">
                    <p className='text-xl font-medium text-neutral-700'>
                        Why Choose Us?
                    </p>
                    <MdSettingsSuggest size={25} className="fill-neutral-700" />
                </div>
            </div>

        </div>
    )
}

export default WhyUs
