import { MdSettingsSuggest } from "react-icons/md";
import ServiceCard from "../partials/card";
import { data } from "../../data/service"


const ServiceSection = () => {
    return (
        <div className="container mx-auto flex justify-center h-full mt-72 mb-52">
            <div className="relative h-full">
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
                    {
                        data.map((item, index) => (
                            <ServiceCard key={index} title={item.title} subtitle={item.subtitle} description={item.description} icon={item.icons} />
                        ))
                    }
                </div>
                <div className="flex h-full justify-center items-center overflow-hidden">
                    <div className="absolute inset-y-16 inset-x-0 w-72 h-80 blur-[145px] rounded-full rotate-45 bg-gradient-to-b -z-10 from-blue-800 to-indigo-600 ">
                    </div>
                    <div className="absolute right-24 -bottom-80 w-72 h-80 blur-[165px] rounded-full rotate-45 bg-gradient-to-b -z-10 from-blue-800 to-indigo-600 ">
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceSection
