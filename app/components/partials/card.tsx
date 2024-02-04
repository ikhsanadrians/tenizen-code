import React from 'react'
import { HiMiniCodeBracket } from "react-icons/hi2";
import { PiAndroidLogoFill } from "react-icons/pi";
import { MdLaptopMac, MdOutlineMiscellaneousServices, MdSettingsSuggest } from "react-icons/md";
import { FaPhotoVideo, FaChalkboardTeacher } from "react-icons/fa";




const ServiceCard = ({ title, subtitle, description, icon }: { title: string, subtitle: string, description: string, icon: string }) => {

  const changeIcon = (icons: string) => {
    switch (icons) {
      case "web": return <HiMiniCodeBracket size={30} className='fill-neutral-800' />
        break;
      case "mobile": return <PiAndroidLogoFill size={30} className='fill-neutral-800' />
        break;
      case "servis": return <MdLaptopMac size={30} className='fill-neutral-800' />
        break;
      case "content": return <FaPhotoVideo size={30} className='fill-neutral-800' />
        break;
      case "course": return <FaChalkboardTeacher size={30} className='fill-neutral-800' />
        break;
    }


  }


  return (
    <div className="card group bg-white border-neutral-300 border-[1.2px] rounded-2xl p-8 cursor-pointer hover:scale-105 duration-200 hover:shadow-sm">
      <div className="icons">
        {changeIcon(icon)}
      </div>
      <div className="middle-text mt-2">
        <p className="font-bold text-xl text-neutral-700 group-hover:text-secondary duration-100">{title}</p>
        <p className="text-sm text-neutral-500">{subtitle}</p>
      </div>
      <div className="bottom-text mt-3 text-neutral-700">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard