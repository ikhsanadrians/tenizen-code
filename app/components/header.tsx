import React from 'react'
import Image from 'next/image'
import TenizenCodeIcon from '../../public/icons/tenizencode.png'
import Link from 'next/link'
import { TiThMenu } from "react-icons/ti";


const header = () => {
    return (
        <header className="border-b-slate-200 border-b-[1.4px] py-3 px-4 lg:px-14 sticky top-0 z-[99] bg-neutral-100/20 backdrop-blur-md">
            <div className="flex items-center justify-between container mx-auto">
                <div className="header-icons flex items-center gap-2">
                    <Image className='h-12 w-12' src={TenizenCodeIcon} alt="TenizenCodeIcon" />
                    <div className="icons-name">
                        <h1 className="font-extrabold text-xl text-neutral-700 lg:block hidden">TenizenCode</h1>
                    </div>
                </div>
                <div className="header-menu lg:block hidden">
                    <ul className="flex gap-8 font-medium text-slate-600">
                        <li className='relative flex justify-center gap-5 items-center group'>
                            <Link href="/">Home</Link>
                            <div className="absolute top-[23px] h-[2px] w-[0%] bg-[#000] transition-all duration-300 group-hover:w-[50%]"></div>
                        </li>
                        <li className='relative flex justify-center gap-5 items-center group'>
                            <Link href="/services">Services</Link>
                            <div className="absolute top-[23px] h-[2px] w-[0%] bg-[#000] transition-all duration-300 group-hover:w-[50%]"></div>
                        </li>
                        <li className='relative flex justify-center gap-5 items-center group'>
                            <Link href="/about">About</Link>
                            <div className="absolute top-[23px] h-[2px] w-[0%] bg-[#000] transition-all duration-300 group-hover:w-[50%]"></div>
                        </li>
                        <li className='relative flex justify-center gap-5 items-center group'>
                            <Link href="/blog">Blog</Link>
                            <div className="absolute top-[23px] h-[2px] w-[0%] bg-[#000] transition-all duration-300 group-hover:w-[50%]"></div>
                        </li>
                    </ul>
                </div>
                <div className="hamburger lg:hidden block">
                    <TiThMenu size={30} />
                </div>
            </div>


        </header>
    )
}

export default header
