import React from 'react'
import Headding from './Headding'

const Year = () => {
  return (
    <div className="py-[68px] px-[55px] bg-yearBg w-[793px] absolute left-[50%] translate-x[-50%] flex rounded-[20px]">

          <div className="relative">
            <Headding className="text-[64px] font-bold font-Podkova" text="2010" as="h1"/>
            <Headding className="text-[28px] font-medium font-Poppins" text="Founded" as="p"/>
            <div className="absolute w-[1px] h-[143px] bg-black top-[-1%] left-[170px] translate-y-[1%]"></div>
          </div>

          <div className="relative ml-[70px] mr-[70px]">
            <Headding className="text-[64px] font-bold font-Podkova" text="5000+" as="h1"/>
            <Headding className="text-[28px] font-medium font-Poppins" text="Product Sold+" as="p"/>
            <div className="absolute w-[1px] h-[143px] bg-black top-[-1%] left-[220px] translate-y-[1%]"></div>
          </div>

          <div className="relative">
            <Headding className="text-[64px] font-bold font-Podkova" text="4500+" as="h1"/>
            <Headding className="text-[28px] font-medium font-Poppins" text="Best Reviews+" as="p"/>
            <div className="absolute w-[1px] h-[143px] bg-black top-[-1%] left-[220px] translate-y-[1%]"></div>
          </div>
        </div>
  )
}

export default Year