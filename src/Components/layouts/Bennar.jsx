import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Headding from '../Headding'
import Button from '../Button'
import Image from '../Image'
import bgImage from '../../assets/bgImage.png'

const Bennar = () => {
  return (
    <Section>
       <Container>
            <Flex>
                <div>
                    <Headding className="text-[64px] font-semibold font-Poppins w-[540px]" text="Find The Best Fashion Style For You" as="h1"/>
                    <Headding className="text-[22px] font-normal font-Poppins w-[531px] mt-[25px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra." as="p"/>

                    <Button dg="py-[25px] px-[90px] border-[1px] border-black rounded-[10px] bg-black text-white hover:bg-nav hover:text-black hover:border-btnBorder text-[24px] font-semibold font-Poppins mt-[70px]" href="https://www.daraz.com.bd/" text="SHOP NOW"/>
                </div>

                <div>
                    <Image dg="ml-[160px]" src={bgImage} />
                </div>
            </Flex>
       </Container>
    </Section>
  )
}

export default Bennar