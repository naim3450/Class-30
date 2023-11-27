import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import women2 from '../../assets/women2.png'
import Headding from '../Headding'
import Year from '../Year'

const Fashion = () => {
  return (
    <section className="relative w-[1320px] mx-auto">
        <Flex>
          <div className="">
            <Image src={women2}/>
          </div>
    
          <div className="ml-[124px]">
            <Headding className="text-[64px] font-bold font-Frank w-[435px]" text="Best Fashion Since 2010" as="h1"/>
            <Headding className="text-[24px] font-semibold font-Poppins w-[435px] mt-[63px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra." as="h3"/>
          </div>
        </Flex>
    </section>
  )
}

export default Fashion