import React from 'react'
import Headding from '../Headding'
import Container from '../Container'
import Flex from '../Flex'
import Button from '../Button'



const Collection = () => {
  return (
    <section className="pt-[217px] pb-[125px]">
        <Headding className="text-[64px] font-bold font-Frank w-[437px] mx-auto pb-[129px]" text="New Collection" as="h1"/>

        <Container>
            <Flex>
              <div className="bg-card1 h-[402px] w-[349px] bg-no-repeat bg-center bg-cover ml-[50px]">
                  <Button dg="py-[9px] px-[108px] bg-white border-[2px] rounded-[20px] hover:bg-btnHover hover:text-white 
                  text-[24px] font-normal font-Poppins ml-[20px] mt-[300px]" href="https://www.daraz.com.bd/products/-i215380104-s1163918347.html?spm=a2a0e.searchlist.sku.7.5b65783aTKQp5Z&search=1" text="Sweater"/>
              </div>

              <div className="bg-card2 h-[402px] w-[349px] bg-no-repeat bg-center bg-cover ml-[88px] mr-[88px]">
                <Button dg="py-[9px] px-[108px] bg-white border-[2px] rounded-[20px] hover:bg-btnHover hover:text-white 
                  text-[24px] font-normal font-Poppins ml-[20px] mt-[300px]" href="https://www.daraz.com.bd/products/-i297603886-s1318601366.html?spm=a2a0e.searchlist.sku.19.175e6b9eoKJTQj&search=1" text="Jeans"/>
              </div>

              <div className="bg-card3 h-[402px] w-[349px] bg-no-repeat bg-center bg-cover rounded-[20px]">
                <Button dg="py-[9px] px-[108px] bg-white border-[2px] rounded-[20px] hover:bg-btnHover hover:text-white 
                  text-[24px] font-normal font-Poppins ml-[20px] mt-[300px]" href="https://www.daraz.com.bd/products/-i201943915-s1546633195.html?spm=a2a0e.searchlist.sku.11.5fb930d86Zk1MN&search=1" text="Baskets"/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Collection