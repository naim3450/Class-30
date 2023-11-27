import React from 'react'
import List from './List'
import Flex from './Flex'

const Menu = () => {
  return (
    <ul>
        <Flex>
            <List dg="text-[24px] font-Poppins font-semibold" href="https://youtu.be/TBn0wuQJnv4" text="Men"/>
            <List dg="ml-[70px] text-[24px] font-Poppins font-semibold" href="#" text="Woman"/>
            <List dg="ml-[70px] text-[24px] font-Poppins font-semibold" href="#" text="Kids"/>
            <List dg="ml-[70px] text-[24px] font-Poppins font-semibold" href="#" text="Collection"/>
            <List dg="ml-[70px] mr-[106px] text-[24px] font-Poppins font-semibold" href="#" text="Trends"/>
        </Flex>
    </ul>
  )
}

export default Menu