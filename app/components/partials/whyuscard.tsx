import React from 'react'

const WhyUsCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="card group bg-white border-neutral-300 border-[1.2px] rounded-2xl p-8 cursor-pointer hover:scale-105 duration-200 hover:shadow-sm">
            {children}
        </div>
    )
}

export default WhyUsCard
