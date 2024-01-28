import React from 'react'
import { HiMiniCodeBracket } from "react-icons/hi2";
import { PiAndroidLogoFill } from "react-icons/pi";
import { MdLaptopMac, MdOutlineMiscellaneousServices, MdSettingsSuggest } from "react-icons/md";



const ServiceSection = () => {
    return (
        <div className="container mx-auto flex justify-center h-full mt-52 mb-52">
            <div className="relative">
                <div className="flex flex-col items-center">
                    <div className="servicesectiontitle flex items-center gap-2 border-[1.5px] border-neutral-700 px-4 py-1 rounded-3xl">
                        <p className='text-xl font-medium text-neutral-700'>
                            Our Services
                        </p>
                        <MdSettingsSuggest size={25} className="fill-neutral-700" />
                    </div>
                    <div className="servicesection-detail mt-8 flex justify-center w-full">
                        <h1 className="text-5xl bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 bg-clip-text text-transparent font-extrabold w-3/6 text-center">Transform your tech business with tailored services</h1>
                    </div>
                </div>
                <div className="service-list mt-8 z-99 grid grid-cols-3 px-8 gap-4">
                    <div className="web bg-white border-neutral-300 border-[1.2px] rounded-2xl p-8">
                        <HiMiniCodeBracket size={30} className='fill-neutral-800' />
                        <div className="middle-text mt-2">
                            <p className="font-bold text-xl text-neutral-700">Web Development</p>
                            <p className="text-sm text-neutral-500">Kami Menerima Jasa Pembuatan Website</p>
                        </div>
                        <div className="bottom-text mt-3 text-neutral-700">
                            <p>Website khusus perusahaan, sekolah, atau personal. Desain pro, responsif, SEO, harga bersaing.</p>
                        </div>
                    </div>
                    <div className="mobile bg-white border-neutral-300 border-[1.2px] rounded-2xl p-8">
                        <PiAndroidLogoFill size={30} className='fill-neutral-800' />
                        <div className="middle-text mt-2">
                            <p className="font-bold text-xl text-neutral-700">Mobile Apps Development</p>
                            <p className="text-sm text-neutral-500">Kami Menerima Jasa Pembuatan Aplikasi</p>
                        </div>
                        <div className="bottom-text mt-3 text-neutral-700">
                            <p>Solusi khusus untuk aplikasi perusahaan, pendidikan, atau personal. Desain pro, fungsional, harga bersaing. Wujudkan ide aplikasi Anda bersama kami!</p>
                        </div>
                    </div>
                    <div className="service-repair bg-white border-neutral-300 border-[1.2px] rounded-2xl p-8">
                        <div className="icons flex items-center gap-2">
                            <MdLaptopMac size={30} className='fill-neutral-800' />
                            <MdOutlineMiscellaneousServices size={30} className='fill-neutral-800' />
                        </div>
                        <div className="middle-text mt-2">
                            <p className="font-bold text-xl text-neutral-700">Service And Repair</p>
                            <p className="text-sm text-neutral-500">Kami Menerima Jasa Servis Dan Perbaikan Laptop Atau PC</p>
                        </div>
                        <div className="bottom-text mt-3 text-neutral-700">
                            <p>Solusi khusus untuk aplikasi perusahaan, pendidikan, atau personal. Desain pro, fungsional, harga bersaing. Wujudkan ide aplikasi Anda bersama kami!</p>
                        </div>
                    </div>

                </div>
                <div className="flex min-h-screen justify-center items-center">
                    <div className="absolute inset-y-16 inset-x-0 w-72 h-80 blur-[145px] rounded-full rotate-45 bg-gradient-to-b -z-10 from-blue-800 to-indigo-600 ">
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceSection
