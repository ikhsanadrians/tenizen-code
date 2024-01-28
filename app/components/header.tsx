import React from 'react'
import Image from 'next/image'
import TenizenCodeIcon from '../../public/icons/tenizencode.png'
import Link from 'next/link'

const header = () => {
    return (
        <header className="border-b-slate-200 border-b-[1.4px] py-3 px-9">
            <div className="flex items-center justify-between container mx-auto">
                <div className="header-icons flex items-center gap-2">
                    <Image className='h-12 w-12' src={TenizenCodeIcon} alt="TenizenCodeIcon" />
                    <div className="icons-name">
                        <h1 className="font-extrabold text-xl text-secondary">TenizenCode</h1>
                    </div>
                </div>
                <div className="header-menu">
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
            </div>


        </header>
    )
}

export default header
