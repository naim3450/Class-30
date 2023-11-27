import React from 'react'
import Headding from '../Headding'
import Button from '../Button'
import Image from '../Image'
import blackWomen from '../../assets/blackWomen.png'
import wLeg from '../../assets/wLeg.png'
import Flex from '../Flex'

const Seller = () => {
  return (
    <section className="bg-sellerBg py-[100px] mt-[274px]">
        <div className="w-[1320px] mx-auto flex">

            <div className="">
                <Headding className="text-[64px] font-bold font-Frank w-[437px] text-white mb-[43px]" 
                text="Best Seller Product" as="h1"/>

                <Headding className="text-[24px] font-bold font-Frank w-[437px] text-white" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus." as="p"/>

                <Button dg="py-[25px] px-[86px] bg-black rounded-[10px] text-white text-[24px] font-Poppins font-semibold hover:bg-WhiteBg hover:text-black border-[1px] hover:border-[1px] mt-[40px]" href="#" text="Learn MORE"/>
            </div>

            <div className="ml-[31px] mr-[31px]">
               <Image dg="w-[366px]" src={blackWomen}/>
               <div className="bg-white pb-[9px]">
               <svg xmlns="http://www.w3.org/2000/svg" width="123" height="21" viewBox="0 0 123 21" fill="none">
                    <path d="M9.37422 0.243042L11.4315 7.21422H18.0888L12.7029 11.5226L14.7601 18.4938L9.37422 14.1854L3.98832 18.4938L6.04555 11.5226L0.659653 7.21422H7.31699L9.37422 0.243042Z" fill="#FFAF37"/>
                    <path d="M35.4536 0.243042L37.5108 7.21422H44.1681L38.7822 11.5226L40.8395 18.4938L35.4536 14.1854L30.0677 18.4938L32.1249 11.5226L26.739 7.21422H33.3963L35.4536 0.243042Z" fill="#FFAF37"/>
                    <path d="M61.5332 0.243042L63.5904 7.21422H70.2477L64.8618 11.5226L66.9191 18.4938L61.5332 14.1854L56.1473 18.4938L58.2045 11.5226L52.8186 7.21422H59.4759L61.5332 0.243042Z" fill="#FFAF37"/>
                    <path d="M87.6125 0.243042L89.6697 7.21422H96.3271L90.9412 11.5226L92.9984 18.4938L87.6125 14.1854L82.2266 18.4938L84.2838 11.5226L78.8979 7.21422H85.5553L87.6125 0.243042Z" fill="#FFAF37"/>
                    <path d="M113.692 0.243042L115.749 7.21422H122.406L117.021 11.5226L119.078 18.4938L113.692 14.1854L108.306 18.4938L110.363 11.5226L104.977 7.21422H111.635L113.692 0.243042Z" fill="#FFAF37"/>
                    </svg>
                <Headding className="text-[22px] font-semibold font-Poppins w-[162px]" text="Sweater Shirt" as="h3"/>
                <Flex>
                    <Headding className="text-[24px] text-gray-500 mr-[30px] font-semibold font-normal" text="$45.99" as="p"/>
                    <Headding className="text-[24px] font-semibold font-normal" text="$35.99" as="p"/>
                </Flex>
                </div>  
            </div>

            <div>
            <Image dg="w-[366px]" src={wLeg}/>
               <div className="bg-white pb-[9px]">
               <svg xmlns="http://www.w3.org/2000/svg" width="123" height="21" viewBox="0 0 123 21" fill="none">
                    <path d="M9.37422 0.243042L11.4315 7.21422H18.0888L12.7029 11.5226L14.7601 18.4938L9.37422 14.1854L3.98832 18.4938L6.04555 11.5226L0.659653 7.21422H7.31699L9.37422 0.243042Z" fill="#FFAF37"/>
                    <path d="M35.4536 0.243042L37.5108 7.21422H44.1681L38.7822 11.5226L40.8395 18.4938L35.4536 14.1854L30.0677 18.4938L32.1249 11.5226L26.739 7.21422H33.3963L35.4536 0.243042Z" fill="#FFAF37"/>
                    <path d="M61.5332 0.243042L63.5904 7.21422H70.2477L64.8618 11.5226L66.9191 18.4938L61.5332 14.1854L56.1473 18.4938L58.2045 11.5226L52.8186 7.21422H59.4759L61.5332 0.243042Z" fill="#FFAF37"/>
                    <path d="M87.6125 0.243042L89.6697 7.21422H96.3271L90.9412 11.5226L92.9984 18.4938L87.6125 14.1854L82.2266 18.4938L84.2838 11.5226L78.8979 7.21422H85.5553L87.6125 0.243042Z" fill="#FFAF37"/>
                    <path d="M113.692 0.243042L115.749 7.21422H122.406L117.021 11.5226L119.078 18.4938L113.692 14.1854L108.306 18.4938L110.363 11.5226L104.977 7.21422H111.635L113.692 0.243042Z" fill="#FFAF37"/>
                    </svg>
                <Headding className="text-[22px] font-semibold font-Poppins w-[162px]" text="Pants fashion" as="h3"/>
                <Flex>
                    <Headding className="text-[24px] text-gray-500 mr-[30px] font-semibold font-normal" text="$55" as="p"/>
                    <Headding className="text-[24px] font-semibold font-normal" text="$44.99" as="p"/>
                </Flex>
                </div>  
            </div>
        </div>

    </section>
  )
}

export default Seller